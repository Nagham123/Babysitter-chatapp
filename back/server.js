var express = require('express');
var app = express();
const SocketIOFile = require('socket.io-file')

app.use('/images/', express.static('./images'))
server = app.listen(4035, function () {
    console.log('server is running on port 4035')
});

var socket = require('socket.io');
io = socket(server);

const babySitterPortfolios = [
    { name: 'sarah', location: 'beirut', experience: '2 years', email: 'sarah@gmail.com', password: '123', image: 'amysign2.jpg' }
]

io.on('connection', (socket) => {
    console.log('user connected')
    //name,location,experience,email,password
    socket.on('signup:info', (babySitterInfo) => {
        babySitterPortfolios.push(babySitterInfo)
        socket.emit('signup:success', babySitterPortfolios)
    })
    socket.emit('porfolio:list', babySitterPortfolios)


    let uploader = new SocketIOFile(socket, {
        // uploadDir: {			// multiple directories
        // 	music: 'data/music',
        // 	document: 'data/document'
        // },
        // uploadDir: '../front/public/uploaded_images',							// simple directory
        uploadDir: './images',							// simple directory
        accepts: ['audio/mpeg', 'audio/mp3', 'image/png', 'image/jpg', 'image/jpeg'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
        maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
        chunkSize: 10240,							// default is 10240(1KB)
        transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
        overwrite: true 							// overwrite file if exists, default is true.
    });
    uploader.on('start', (fileInfo) => {
        console.log('Start uploading');
        // console.log(fileInfo);
    });
    uploader.on('stream', (fileInfo) => {
        // console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
    });
    uploader.on('complete', (fileInfo) => {
        console.log('Upload Complete.');
        const operation = fileInfo.data.commandType
        if (operation === 'signup_image') {
            const signupData = { ...fileInfo.data, image: fileInfo.name }
            babySitterPortfolios.push(signupData)
            socket.emit('porfolio:list', babySitterPortfolios)
            // sendSignUpPicture(signupData)
        } else {
            throw new Error('operation is not defined')
        }
        // else if(operation === 'signup'){
        //     const signUpData = { ...fileInfo.data, image:fileInfo.name }
        //     const { username, password, language, image } = signUpData
        //     const user = { username, password, language, image, id:ids++ }
        //     users.push(user)
        //     socket.emit('signup:ok',user)
        //     addUser(signUpData)
        // }
    });
    uploader.on('error', (err) => {
        console.log('Error!', err);
    });
    uploader.on('abort', (fileInfo) => {
        console.log('Aborted: ', fileInfo);
    });

    //chat
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })

});