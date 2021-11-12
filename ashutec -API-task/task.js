"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cross_fetch_1 = require("cross-fetch");
var url = 'https://reqres.in/api/users';
// function add(u: data_api): object {
//     console.log(u);
//     return u;
// }
function getAPI(url) {
    return (0, cross_fetch_1["default"])(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(function (data) { return data.data; })["catch"](function (err) { return console.log(err.message); });
}
function match(data) {
    return data.id === 7;
}
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var res, newId, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAPI(url)];
                case 1:
                    res = _a.sent();
                    // const res: string[] = ['a', 'a', 's', 'c'];
                    res.push({ id: 7, email: "khushbu@gmail.com", first_name: "khushbu", last_name: "yadav", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuwEr4Yg2UWn-c5WMV2HvJm4qQ4wEQ318TnxRA2nvPPdd8A8PcUrzCEIPBQF0EVZdN8w&usqp=CAU" });
                    console.log("New data Added:", res);
                    newId = 1;
                    index = res.findIndex(match);
                    console.log(index);
                    // res.slice(index, 1);
                    return [2 /*return*/, res];
            }
        });
    });
}
getUser();
// async function update() {
//     let data_update: data_api[] = await getUser();
//     console.log(data_update);
//     // const updateId = 7;
//     const find_data = data_update.find((data) => {
//         if (data.id === 7)
//             data.email = "xyz@gmail.com",
//                 data.first_name = "xyz",
//                 data.last_name = "kdfgjf",
//                 data.avatar = "https://dkfndgkldf.snsdf"
//     });
//     console.log(find_data);
// }
// update();
