/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The MailerUser model module.
* @module model/MailerUser
* @version 1.0
*/

var MailerUser = (function () {
    /**
    * Constructs a new <code>MailerUser</code>.
    * @alias module:model/MailerUser
    * @class
    */

    function MailerUser() {
        _classCallCheck(this, MailerUser);

        this.Uuid = undefined;
        this.Address = undefined;
        this.Name = undefined;
        this.Language = undefined;
    }

    /**
    * Constructs a <code>MailerUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MailerUser} obj Optional instance to populate.
    * @return {module:model/MailerUser} The populated <code>MailerUser</code> instance.
    */

    MailerUser.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailerUser();

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = _ApiClient2['default'].convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('Address')) {
                obj['Address'] = _ApiClient2['default'].convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = _ApiClient2['default'].convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Language')) {
                obj['Language'] = _ApiClient2['default'].convertToType(data['Language'], 'String');
            }
        }
        return obj;
    };

    /**
    * @member {String} Uuid
    */
    return MailerUser;
})();

exports['default'] = MailerUser;
module.exports = exports['default'];

/**
* @member {String} Address
*/

/**
* @member {String} Name
*/

/**
* @member {String} Language
*/