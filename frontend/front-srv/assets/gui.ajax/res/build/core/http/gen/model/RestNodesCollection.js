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

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

/**
* The RestNodesCollection model module.
* @module model/RestNodesCollection
* @version 1.0
*/

var RestNodesCollection = (function () {
    /**
    * Constructs a new <code>RestNodesCollection</code>.
    * @alias module:model/RestNodesCollection
    * @class
    */

    function RestNodesCollection() {
        _classCallCheck(this, RestNodesCollection);

        this.Parent = undefined;
        this.Children = undefined;
    }

    /**
    * Constructs a <code>RestNodesCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestNodesCollection} obj Optional instance to populate.
    * @return {module:model/RestNodesCollection} The populated <code>RestNodesCollection</code> instance.
    */

    RestNodesCollection.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestNodesCollection();

            if (data.hasOwnProperty('Parent')) {
                obj['Parent'] = _TreeNode2['default'].constructFromObject(data['Parent']);
            }
            if (data.hasOwnProperty('Children')) {
                obj['Children'] = _ApiClient2['default'].convertToType(data['Children'], [_TreeNode2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {module:model/TreeNode} Parent
    */
    return RestNodesCollection;
})();

exports['default'] = RestNodesCollection;
module.exports = exports['default'];

/**
* @member {Array.<module:model/TreeNode>} Children
*/