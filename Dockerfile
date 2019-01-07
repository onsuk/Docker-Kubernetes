# # Specify a base image
# From node:alpine

# ## Define WORKDIR
# WORKDIR /user/app

# # install some depenendencies
# COPY ./package.json ./
# RUN npm install

# # Caching
# COPY ./ ./

# # Default command
# CMD ["npm", "start"] 


FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]