/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
 export default function EpayPaymentsStartup(context) {
    context.collections.ExampleIOUPaymentRefunds = context.app.db.collection("EpayPaymentRefunds");
  }