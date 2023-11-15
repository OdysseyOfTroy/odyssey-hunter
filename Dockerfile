FROM ruby:3.2.2
WORKDIR /app

# Install rails
RUN gem install rails bundler
#RUN chown -R user:user /app
WORKDIR /app

CMD ["/bin/sh"]