define(function(){
  'use strict';

  function patch(_){
    _.templateSettings = {
      evaluate    : /<%([\s\S]+?)%>/g,
      interpolate : /<%cleanHtml([\s\S]+?)%>/g,
      escape      : /<%[=-]([\s\S]+?)%>/g
    };
    return _;
  }

  return patch;
});
