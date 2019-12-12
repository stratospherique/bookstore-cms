module Api::V1

  class BooksController < ApplicationController
    before_action :set_book, only: [:show, :destroy]

    # Get /books
    def index
      @books = Book.all

      render json: @books
    end

    # Get /books/id
    def show
      render json: @book
    end

    #POST /books
    def create
      @book = Book.new(list_params)
      if @book.save
        render json: @book
      else 
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    # DELETE /books/id
    def destroy
      #@book = Book.find(params[:id])
      @book.destroy
      if @book.destroy
        head :no_content, status: :ok
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    private

    def set_book
      @book = Book.find(params[:id])
    end

    def list_params
      params.require(:book).permit(:title, :author, :category)
    end
  end  
end