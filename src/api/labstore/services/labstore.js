'use strict';

/**
 * labstore service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::labstore.labstore');
