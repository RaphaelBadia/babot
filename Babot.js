'use strict';

const _            =  require('lodash');
const co           =  require('co');
const debug        =  require('debug')('babot');

const Config       =  require('./Config');
// TODO: Rake's library is broken :(
// //Monkey patch to socket.io to send cookies in the handshake for auth
// require('socket.io-client-cookie').setCookies('id='+Config.SESSION);
const GameClient   =  require('./GameClient');
// const ChatClient   =  require('./ChatClient');
const Lib          =  require('./Lib');

function Babot() {

  let self = this;

  // Connect to the game server.
  self.gameClient = new GameClient(Config);

  // // Connect to the web server.
  // self.chatClient = new ChatClient(Config);

  // Setup the game bindings.
  self.gameClient.on('connect', function(data) {
    console.log("connect", data);
  });

  self.gameClient.on('join', function(data) {
    console.log("join", data);
  });

  self.gameClient.on('disconnect', function(data) {
    console.log("disconnect", data);
  });

  self.gameClient.on('game_starting', function(data) {
    console.log("game_starting", data);
  });

  self.gameClient.on('game_started', function(data) {
    console.log("game_started", data);
  });

  self.gameClient.on('game_tick', function(data) {
    console.log("game_tick", data);
  });

  self.gameClient.on('game_crash', function(data) {
    console.log("game_crash", data);
  });

  self.gameClient.on('player_bet', function(data) {
    console.log("bet", data);
  });

  self.gameClient.on('cashed_out', function(data) {
    console.log("cashed_out", data);
  });


  // // Setup the chat bindings.
  // self.webClient.on('msg', function(msg) {
  // });
  //
  // self.webClient.on('all', function(ev, data) {
  //   console.log("Received chat event '%s' with data '%s'", ev, JSON.stringify(data));
  // });
  //
}

let babot = new Babot();
