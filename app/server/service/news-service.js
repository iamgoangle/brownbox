"use strict";
var mongoose = require('mongoose');
import Item from './../model/item.model'

class NewsService{
  constructor(){
  }

  getNews(){
//    var mongoose = require('mongoose');
    //var connectionToDb1 = mongoose.createConnection('mongodb://127.0.0.1:27017', 'test');
    try{
        // var item = new Item();
        // item.name = '123';
        // item.save(function(err,item){
        //   if(err){
        //     console.log('error');
        //   }else{
        //     console.log('saved');
        //   }
        // })

//      mongoose.connect('mongodb://localhost:27017/test');
    }catch(err){
      console.log(err);
    }finally{
//      mongoose.disconnect();
    }
    return {name:'todaynews', content:'someone die again'};
  }
}

module.exports = NewsService;
