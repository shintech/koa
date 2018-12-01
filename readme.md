# shintech/koa

## Table of Contents
1. [ Synopsis ](#synopsis)
2. [ Usage ](#usage) <br />
	a. [.env ](#env) <br />
	b. [Development ](#development) <br />
	c. [Production ](#production)

<a name="synopsis"></a>
### Synopsis

    koa.js seed project

### Installation

    ./install.sh

<a name="usage"></a>
### Usage
<a name="env"></a>
#### config/env/.env
    
    PORT=8000
    NODE_ENV=development

<a name="development"></a>
#### Development

    npm run dev
    
    # or
    
    yarn dev

<a name="production"></a>
#### Production
    docker-compose build && docker-compose up -d
