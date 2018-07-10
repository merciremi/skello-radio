require_relative 'app.rb'
require 'rack/test'

set :environment, :test

def app
  Sinatra::Application
end

describe '#app' do
include Rack::Test::Methods

  it "load the home page" do
    get '/'
    expect(last_response).to be_ok
  end

  it "display posts titles" do
    get '/'
    expect(last_response.body).to include("Tout sur mon chien")
  end

  it "display posts content" do
    get '/'
    expect(last_response.body).to include("I love rick owens")
  end

  it "display posts comments button" do
    get '/'
    expect(last_response.body).to include("commentaire")
  end

  it "display posts photo" do
    get '/'
    expect(last_response.body).to include('alt="Tout sur mon chien"')
  end
end

# Dont forget to run gem install rack-test and gem install rspec
# before running tests
