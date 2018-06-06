module.exports = {
    apps: [{
        name: 'newimagepco.com',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'rick',
            host: 'ec2-52-14-23-213.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/aws_dev',
            ref: 'origin/master',
            repo: 'https://github.com/rickvlzaa/newimagepco.com-dev.git',
            path: '/home/rick/live-apps/newimagepco',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}