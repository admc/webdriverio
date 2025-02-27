export default {
    '/session/:sessionId/context': {
        GET: {
            command: 'getContext',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#webviews-and-other-contexts',
            parameters: [],
            returns: {
                type: 'Context',
                name: 'context',
                description:
                    "a string representing the current context or null representing 'no context'",
            },
        },
        POST: {
            command: 'switchContext',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#webviews-and-other-contexts',
            parameters: [
                {
                    name: 'name',
                    type: 'string',
                    description: 'a string representing an available context',
                    required: true,
                },
            ],
        },
    },
    '/session/:sessionId/contexts': {
        GET: {
            command: 'getContexts',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#webviews-and-other-contexts',
            parameters: [],
            returns: {
                type: 'Context[]',
                name: 'contexts',
                description:
                    "an array of strings representing available contexts, e.g. 'WEBVIEW', or 'NATIVE'",
            },
        },
    },
    '/session/:sessionId/element/:elementId/pageIndex': {
        GET: {
            command: 'getPageIndex',
            ref: 'https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#mobile-json-wire-protocol-endpoints',
            parameters: [],
            returns: {
                type: 'string',
                name: 'pageIndex',
            },
        },
    },
    '/session/:sessionId/network_connection': {
        GET: {
            command: 'getNetworkConnection',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#device-modes',
            parameters: [],
            returns: {
                type: 'number',
                name: 'connectionType',
                description:
                    'see https://appium.github.io/appium.io/docs/en/writing-running-appium/other/network-connection/',
            },
        },
        POST: {
            command: 'setNetworkConnection',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#device-modes',
            parameters: [
                {
                    name: 'type',
                    type: 'number',
                    description:
                        'a bit mask that should be translated to an integer value when serialized',
                    required: true,
                },
            ],
        },
    },
    '/session/:sessionId/touch/perform': {
        GET: {
            command: 'touchPerform',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#touch-gestures',
            parameters: [
                {
                    name: 'actions',
                    type: 'object[]',
                    description:
                        'a list of objects, each of which represents an input source and its associated actions',
                    required: true,
                },
            ],
        },
    },
    '/session/:sessionId/touch/multi/perform': {
        GET: {
            command: 'multiTouchPerform',
            ref: 'https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md#touch-gestures',
            parameters: [
                {
                    name: 'actions',
                    type: 'object[]',
                    description:
                        'a list of objects, each of which represents an input source and its associated actions',
                    required: true,
                },
                {
                    name: 'elementId',
                    type: 'object[]',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
        },
    },
    '/session/:sessionId/receive_async_response': {
        POST: {
            command: 'receiveAsyncResponse',
            ref: 'https://github.com/appium/appium-base-driver/blob/master/docs/mjsonwp/protocol-methods.md#mobile-json-wire-protocol-endpoints',
            parameters: [
                {
                    name: 'status',
                    type: 'string',
                    description: 'the expected status of the response',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description: 'the expected value of the response',
                    required: true,
                },
            ],
        },
    },
}
