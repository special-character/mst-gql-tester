/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin } from "mst-gql"








/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([], [], "js"))
  .props({

  })
  .actions(self => ({
    queryHello(variables, options = {}) {
      return self.query(`query hello { hello }`, variables, options)
    },
  }))
