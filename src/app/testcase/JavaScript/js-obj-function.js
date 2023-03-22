import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

// @NgModule()
export const computeSqrtAsync = function (number) {
    if (number < 0) {
        return Promise.reject('no negative number, please.');
    }
    if (number === 0) {
        return Promise.resolve(0);
    }
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(Math.sqrt(number)), 1000);
    });
};

export const computeSync = function (number) {
    if (number < 0) {
        throw new Error('no negative, please');
    }
    return number * 2;
};

export const computeAsync = function (number) {
    if (number < 0) {
        return Promise.reject('no negative, please');
    }
    return Promise.resolve(number * 2);
};




