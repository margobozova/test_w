function main(collection, ...args) {
  return collection.filter(element => {
    return args.every(arg => {
      for (let key in arg) {
        let value = element[key];
        let insertedArg = arg[key];

        if (key !== '$or') {
          for (let key in insertedArg) {
            return filters(value, insertedArg, key);
          }
        }
        if (key === '$or') {
          return insertedArg.find(item => {
            for (let key in item) {
              const insertedArgsOr = item[key];
              const valueOr = element[key];

              for (let key in insertedArgsOr) {
                return filters(valueOr, insertedArgsOr, key);
              }
            }
          });
        }
      }
    });
  });
}

function filters(value, insertedArg, key) {
  if (typeof value === 'string') {
    if (key === '$equal') {
      return $equal(value, insertedArg);
    }
    if (key === '$includes') {
      return $includes(value, insertedArg);
    }
    if (key === '$start') {
      return $start(value, insertedArg);
    }
    if (key === '$notIncludes') {
      return $notIncludes(value, insertedArg);
    }
  }
  if (typeof value === 'number') {
    if (key === '$equal') {
      return $equal(value, insertedArg);
    }
    if (key === '$greater') {
      return $greater(value, insertedArg);
    }
    if (key === '$less') {
      return $less(value, insertedArg);
    }
    if (key === '$greaterOrE') {
      return $greaterOrE(value, insertedArg);
    }
    if (key === '$lessOrE') {
      return $lessOrE(value, insertedArg);
    }
  }
}



function $equal(value, arg) {
  for (let key in arg) {
    if (value !== arg[key]) {
      return false;
    }
  }
  return true;
}

function $includes(value, arg) {
  for (let key in arg) {
    if (!value.includes(arg[key])) {
      return false;
    }
  }
  return true;
}

function $start (value, arg) {
  for (let key in arg) {
    let length = arg[key].length;
    if (value.slice(0, length) !== arg[key]) {
      return false;
    }
  }
  return true;
}

function $notIncludes(value, arg) {
  for (let key in arg) {
    if (value.includes(arg[key])) {
      return false;
    }
  }
  return true;
}

function $greater(value, arg) {
  for (let key in arg) {
    if (value < arg[key]) {
      return false;
    }
  }
  return true;
}

function $less(value, arg) {
  for (let key in arg) {
    if (value > arg[key]) {
      return false;
    }
  }
  return true;
}

function $greaterOrE(value, arg) {
  for (let key in arg) {
    if (value <= arg[key]) {
      return false;
    }
  }
  return true;
}

function $lessOrE(value, arg) {
  for (let key in arg) {
    if (value >= arg[key]) {
      return false;
    }
  }
  return true;
}

module.exports = main;
