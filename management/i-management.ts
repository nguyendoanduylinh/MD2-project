export interface IManagement<T> {
  findById(id: number): number;
  getAll(): T[];
  addNew(t: T): void;
  updateById(id: number, t: T): void;
  removeById(id: number): void;
}
