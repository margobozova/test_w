const filters = require('./filters');

const data = [
  { group: 'Depeche Mode', album: 'Speak & Spell', year: 1981 },
  { group: 'Depeche Mode', album: 'A Broken Frame', year: 1982 },
  { group: 'Depeche Mode', album: 'Construction Time Again', year: 1983 },
  { group: 'Depeche Mode', album: 'Music for the Masses', year: 1987 },
  { group: 'Depeche Mode', album: 'Songs of Faith and Devotion ', year: 1993 },
  { group: 'Depeche Mode', album: 'Playing the Angel', year: 2005 },
  { group: 'Foals', album: 'Antidotes', year: 2008 },
  { group: 'Foals', album: 'Total Life Forever', year: 2010 },
  { group: 'Foals', album: 'Holy Fire ', year: 2013 },
  { group: 'Foals', album: 'What Went Down', year: 2015 },
  { group: 'Muse', album: 'Showbiz', year: 1999 },
  { group: 'Muse', album: 'Origin of Symmetry', year: 2001 },
  { group: 'Muse', album: 'Absolution', year: 2003 },
  { group: 'Muse', album: 'Black Holes and Revelations', year: 2006 },
  { group: 'Muse', album: 'The Resistance', year: 2009 },
  { group: 'Muse', album: 'The 2nd Law', year: 2012 },
  { group: 'Muse', album: 'Drones', year: 2015 }
];

console.log(filters(
  data,
  { $or: [ {year:  {$less: 2012 } }, {year:  {$equal: 2012 } }] },
  {group: {$equal: 'Muse'}}
  ));

/**
 * Доступные операторы в библиотеке:
 */

/**
 * $equal - оператор строгого сравнения.
 * group - атрибут по которому проходится фильтр.
 * 'Muse' - значение с которым сравниваем.
 */
filters(data, { group: { $equal: 'Muse' } });

/**
 * $includes - проверяет содержит ли строка подстроку.
 */
filters(data, { group: { $includes: 'se' } });

/**
 * $start - проверяет начинается ли строка с подстроки.
 */
filters(data, { group: { $start: 'Mu' } });

/**
 * $notIncludes - проверяет, что строка не содержит подстроку.
 */
filters(data, { group: { $notIncludes: 'se' } });

/**
 * $greater - выводит числа больше чем число с которым сравниваем.
 */
filters(data, { year: { $greater: 2000 } });

/**
 * $less - выводит числа меньше чем число с которым сравниваем.
 */
filters(data, { year: { $less: 2000 } });

/**
 * $greaterOrE - выводит числа больше или равно чем число с которым сравниваем.
 */
filters(data, { year: { $greaterOrE: 2000 } });

/**
 * $lessOrE - выводит числа меньше или равно чем число с которым сравниваем.
 */
filters(data, { year: { $lessOrE: 2000 } });

/**
 * Логическое И
 */
filters(data, {}, {}, {});

/**
 * Логическое ИЛИ
 */
filters(data, { $or: [ {}, {} ] });