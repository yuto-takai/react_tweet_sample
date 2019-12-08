class TweetsController < ApplicationController

  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def create
    @tweet = Tweet.create(tweet: params[:tweet])
    render json: @tweet
  end

  def update
    @tweet = Tweet.find(params[:id])
    @tweet.update_attributes(tweet: params[:tweet])
    render json: @tweet
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    if @tweet.destroy
      head :no_content, status: :ok
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

end