var express = require('express'),app = express(),cons = require('consolidate'),dust = require('dustjs-helpers');

var connect = "postgres://hzlqzglq:TA5Tns4Mp2Kme-EUT9qf36NHyMkHsNpl@salt.db.elephantsql.com:5432/hzlqzglq";

app.engine('dust',cons.dust);
