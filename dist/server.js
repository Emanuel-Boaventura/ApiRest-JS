"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
  console.log(`"CTRL + Clique" em http://localhost:${process.env.PORT}`);
});