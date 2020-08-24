"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProjects = getAllProjects;
exports.getProjectsByTag = getProjectsByTag;
exports.getTechnos = getTechnos;
exports.getProjectByName = getProjectByName;
exports.create_Project = create_Project;
exports.update_Project = update_Project;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _project_Db = require("../../Services/Project/project_Db");

function getAllProjects(_x, _x2) {
  return _getAllProjects.apply(this, arguments);
}

function _getAllProjects() {
  _getAllProjects = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var projects;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _project_Db.get_AllProjects)();

          case 2:
            projects = _context.sent;

            if (!projects) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              projects: projects
            }));

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllProjects.apply(this, arguments);
}

function getProjectsByTag(_x3, _x4) {
  return _getProjectsByTag.apply(this, arguments);
}

function _getProjectsByTag() {
  _getProjectsByTag = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var tag, projects;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tag = req.params.tag;
            _context2.next = 3;
            return (0, _project_Db.get_ProjectsByTag)(tag);

          case 3:
            projects = _context2.sent;

            if (!projects) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              projects: projects
            }));

          case 8:
            return _context2.abrupt("return", null);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProjectsByTag.apply(this, arguments);
}

function getTechnos(_x5, _x6) {
  return _getTechnos.apply(this, arguments);
}

function _getTechnos() {
  _getTechnos = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var technos;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _project_Db.get_AllTechnos)();

          case 2:
            technos = _context3.sent;

            if (!technos) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(200).json({
              technos: technos
            }));

          case 7:
            return _context3.abrupt("return", null);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTechnos.apply(this, arguments);
}

function getProjectByName(_x7, _x8) {
  return _getProjectByName.apply(this, arguments);
}

function _getProjectByName() {
  _getProjectByName = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var name, projects;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            name = req.params.ProjectName;
            _context4.next = 3;
            return (0, _project_Db.get_ProjectByname)(name);

          case 3:
            projects = _context4.sent;

            if (!projects) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(200).json({
              projects: projects
            }));

          case 8:
            return _context4.abrupt("return", null);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getProjectByName.apply(this, arguments);
}

function create_Project(_x9, _x10) {
  return _create_Project.apply(this, arguments);
}

function _create_Project() {
  _create_Project = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var img, _req$body, linkWebsite, linkCode, title, description, techno, projects;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            img = req.file;
            _req$body = req.body, linkWebsite = _req$body.linkWebsite, linkCode = _req$body.linkCode, title = _req$body.title, description = _req$body.description, techno = _req$body.techno;
            if (req.file) img = req.file.path;
            _context5.next = 5;
            return (0, _project_Db.createProject)({
              img: img,
              linkWebsite: linkWebsite,
              linkCode: linkCode,
              title: title,
              description: description,
              techno: techno
            });

          case 5:
            projects = _context5.sent;

            if (!projects) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", res.status(200).json({
              projects: projects
            }));

          case 10:
            return _context5.abrupt("return", null);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _create_Project.apply(this, arguments);
}

function update_Project(_x11, _x12) {
  return _update_Project.apply(this, arguments);
}

function _update_Project() {
  _update_Project = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var img, id, _req$body2, linkWebsite, linkCode, title, description, techno, project;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            img = req.file;
            id = req.params.id;
            _req$body2 = req.body, linkWebsite = _req$body2.linkWebsite, linkCode = _req$body2.linkCode, title = _req$body2.title, description = _req$body2.description, techno = _req$body2.techno;
            if (img) img = '/img/' + req.file.originalname;
            _context6.next = 6;
            return (0, _project_Db.updatProject)({
              img: img,
              linkWebsite: linkWebsite,
              linkCode: linkCode,
              title: title,
              description: description,
              techno: techno,
              id: id
            });

          case 6:
            project = _context6.sent;

            if (!project) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(200).json({
              message: 'Project has been update'
            }));

          case 9:
            return _context6.abrupt("return", null);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _update_Project.apply(this, arguments);
}