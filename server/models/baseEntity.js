/**
 * @property {ObjectID} _id
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
 export class BaseEntity {

    constructor() {
      this.createdAt = new Date();
      this.updatedAt = new Date();
      const props = wrap(this).__meta.properties;
  
      Object.keys(props).forEach(prop => {
        if ([ReferenceType.ONE_TO_MANY, ReferenceType.MANY_TO_MANY].includes(props[prop].reference)) {
          this[prop] = new Collection(this);
        }
      });
    }
  
  }