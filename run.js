/**
 * Created by chenying on 16-7-26.
 */
const Jasmine=require('jasmine');
const jasmine=new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();