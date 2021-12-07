import { RULE } from './constants.js';

export const parseCarNames = names => names.split(',').map(name => name.trim());

const hasNotDuplicatedNames = names => new Set(names).size === names.length;

const hasValidNamesLength = names =>
  names.filter(name => {
    const { length } = name;
    return length >= RULE.MIN_NAME_LENGTH && length <= RULE.MAX_NAME_LENGTH;
  }).length === names.length;

export const isValidCarNames = names =>
  names.length > 0 &&
  hasNotDuplicatedNames(names) &&
  hasValidNamesLength(names);

export const parseRacingCount = count => +count.trim();

export const isValidRacingCount = count =>
  !Number.isNaN(count) && Number.isInteger(count) && count > 0;