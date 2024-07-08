import React from 'react';
import { Refine } from "@refinedev/core";
import resources from './resources'; // Substitua pelo caminho do seu arquivo

export default function App() {
  return (
    (<Refine resources={[...resources, {
                              name: "rotas",
                              list: "/rotas",
                              create: "/rotas/create",
                              edit: "/rotas/edit/:id",
                              show: "/rotas/show/:id"
                            }, {
                            name: "rotas",
                            list: "/rotas",
                            create: "/rotas/create",
                            edit: "/rotas/edit/:id",
                            show: "/rotas/show/:id"
                          }, {
                          name: "auth_users",
                          list: "/auth_users",
                          create: "/auth_users/create",
                          edit: "/auth_users/edit/:id",
                          show: "/auth_users/show/:id"
                        }, {
                        name: "authUsers",
                        list: "/authUsers",
                        create: "/authUsers/create",
                        edit: "/authUsers/edit/:id",
                        show: "/authUsers/show/:id"
                      }, {
                      name: "usuarios",
                      list: "/usuarios",
                      create: "/usuarios/create",
                      edit: "/usuarios/edit/:id",
                      show: "/usuarios/show/:id"
                    }, {
                    name: "documentos_veiculos",
                    list: "/documentos_veiculos",
                    create: "/documentos_veiculos/create",
                    edit: "/documentos_veiculos/edit/:id",
                    show: "/documentos_veiculos/show/:id"
                  }, {
                  name: "checklist_diario",
                  list: "/checklist_diario",
                  create: "/checklist_diario/create",
                  edit: "/checklist_diario/edit/:id",
                  show: "/checklist_diario/show/:id"
                }, {
                name: "calculo_horas_motorista",
                list: "/calculo_horas_motorista",
                create: "/calculo_horas_motorista/create",
                edit: "/calculo_horas_motorista/edit/:id",
                show: "/calculo_horas_motorista/show/:id"
              }, {
              name: "avaliacao_usuario",
              list: "/avaliacao_usuario",
              create: "/avaliacao_usuario/create",
              edit: "/avaliacao_usuario/edit/:id",
              show: "/avaliacao_usuario/show/:id"
            }, {
            name: "documentos_usuario",
            list: "/documentos_usuario",
            create: "/documentos_usuario/create",
            edit: "/documentos_usuario/edit/:id",
            show: "/documentos_usuario/show/:id"
          }, {
          name: "categorias_documentos",
          list: "/categorias_documentos",
          create: "/categorias_documentos/create",
          edit: "/categorias_documentos/edit/:id",
          show: "/categorias_documentos/show/:id"
        }, {
        name: "categoriasDocumento",
        list: "/categoriasDocumento",
        create: "/categoriasDocumento/create",
        edit: "/categoriasDocumento/edit/:id",
        show: "/categoriasDocumento/show/:id"
      }, {
      name: "categorias",
      list: "/categorias",
      create: "/categorias/create",
      edit: "/categorias/edit/:id",
      show: "/categorias/show/:id"
    }]}>
      {/* Seus componentes da aplicação Refine aqui */}
    </Refine>)
  );
}