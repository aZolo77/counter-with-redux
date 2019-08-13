export const updateObject = (oldObject, udatedValues) => {
  return {
    ...oldObject,
    ...udatedValues
  };
};
