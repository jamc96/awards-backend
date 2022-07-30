"use strict";

/**
 *  event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { getFullPopulateObject } = require("../../../utils/helpers");

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const { results, meta } = await strapi.service("api::event.event").find({
      ...getFullPopulateObject("api::event.event"),
      ...query,
    });

    const sanitizedEntities = await this.sanitizeOutput(results, ctx);

    return {
      data: sanitizedEntities,
      meta,
    };
  },
}));
