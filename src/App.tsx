import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import MergeTwoToneIcon from '@mui/icons-material/MergeTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';

import {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import authProvider from "./authProvider";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  UsuariosCreate,
  UsuariosList,
  UsuariosEdit,
  UsuariosShow,
} from "./pages/usuarios";
import {
  Avaliacao_usuarioCreate,
  Avaliacao_usuarioList,
  Avaliacao_usuarioEdit,
  Avaliacao_usuarioShow,
} from "./pages/avaliacao_usuarios";
import {
  Documentos_usuarioCreate,
  Documentos_usuarioList,
  Documentos_usuarioEdit,
  Documentos_usuarioShow,
} from "./pages/documentos_usuarios";
import {
  Checklist_diarioCreate,
  Checklist_diarioList,
  Checklist_diarioEdit,
  Checklist_diarioShow,
} from "./pages/checklist_diarios";
import {
  VeiculoCreate,
  VeiculoList,
  VeiculoEdit,
  VeiculoShow,
} from "./pages/veiculos";
import {
  ContratoCreate,
  ContratoList,
  ContratoEdit,
  ContratoShow,
} from "./pages/contratos";
import {
  DocumentosVeiculoCreate,
  DocumentosVeiculoEdit,
  DocumentosVeiculoList,
  DocumentosVeiculoShow,
} from "./pages/documentos_veiculo";
import {
  Calculo_horas_motoristaCreate,
  Calculo_horas_motoristaEdit,
  Calculo_horas_motoristaList,
  Calculo_horas_motoristaShow,
} from "./pages/calculo_horas_motoristas";
import {
  RotaCreate,
  RotaList,
  RotaEdit,
  RotaShow
} from "./pages/rotas";
import {
  CategoriasCreate,
  CategoriasEdit,
  CategoriasList,
  CategoriasShow,
} from "./pages/categorias";
import { supabaseClient } from "./utility";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import { Person2TwoTone } from "@mui/icons-material";

function App() {
  return (
    (<BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={notificationProvider}
                resources={[{
                  name: "veiculos",
                  create: "/veiculos/create",
                  list: "/veiculos",
                  edit: "/veiculos/edit/:id",
                  show: "/veiculos/show/:id",
                  icon:<DirectionsBusTwoToneIcon/>,
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "contratos",
                  create: "/contratos/create",
                  list: "/contratos",
                  edit: "/contratos/edit/:id",
                  show: "/contratos/show/:id",
                  icon: <FileCopyTwoToneIcon/>,
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "rotas",
                  list: "/rotas",
                  create: "/rotas/create",
                  edit: "/rotas/edit/:id",
                  show: "/rotas/show/:id",
                  icon: <MergeTwoToneIcon/>,
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "usuarios",
                  list: "/usuarios",
                  create: "/usuarios/create",
                  edit: "/usuarios/edit/:id",
                  show: "/usuarios/show/:id",
                  icon: <Person2TwoTone/>,
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "documentos_veiculo",
                  list: "/documentos_veiculo",
                  create: "/documentos_veiculo/create",
                  edit: "/documentos_veiculo/edit/:id",
                  show: "/documentos_veiculo/show/:id",
                  icon: <ArticleTwoToneIcon/>,
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "checklist_diario",
                  list: "/checklist_diario",
                  create: "/checklist_diario/create",
                  edit: "/checklist_diario/edit/:id",
                  show: "/checklist_diario/show/:id",
                  icon: <ChecklistTwoToneIcon/>,
                }, {
                  name: "calculo_horas_motorista",
                  list: "/calculo_horas_motorista",
                  create: "/calculo_horas_motorista/create",
                  edit: "/calculo_horas_motorista/edit/:id",
                  show: "/calculo_horas_motorista/show/:id",
                  icon: <AccessTimeTwoToneIcon/>,
                }, {
                  name: "avaliacao_usuario",
                  list: "/avaliacao_usuario",
                  create: "/avaliacao_usuario/create",
                  edit: "/avaliacao_usuario/edit/:id",
                  show: "/avaliacao_usuario/show/:id",
                  icon: <StarTwoToneIcon/>,
                }, {
                  name: "documentos_usuario",
                  list: "/documentos_usuario",
                  create: "/documentos_usuario/create",
                  edit: "/documentos_usuario/edit/:id",
                  show: "/documentos_usuario/show/:id",
                  icon: <AssignmentIndTwoToneIcon/>,
                }, {
                  name: "categorias",
                  list: "/categorias",
                  create: "/categorias/create",
                  edit: "/categorias/edit/:id",
                  show: "/categorias/show/:id"
                }]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "Abelro-OuityG-Ftl7au",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2 Header={Header}>
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route index element=
                      {<NavigateToResource resource="veiculos"/>}
                    />
                    <Route path="/usuarios">
                      <Route index element={<UsuariosList />} />
                      <Route path="create" element={<UsuariosCreate />} />
                      <Route path="edit/:id" element={<UsuariosEdit />} />
                      <Route path="show/:id" element={<UsuariosShow />} />
                    </Route>
                    <Route path="/veiculos">
                      <Route index element={<VeiculoList />} />
                      <Route path="create" element={<VeiculoCreate />} />
                      <Route path="edit/:id" element={<VeiculoEdit />} />
                      <Route path="show/:id" element={<VeiculoShow />} />
                    </Route>
                    <Route path="/rotas" >
                      <Route index element={<RotaList />} />
                      <Route path="create" element={<RotaCreate />} />
                      <Route path="edit/:id" element={<RotaEdit />} />
                      <Route path="show/:id" element={<RotaShow />} />
                    </Route>
                    <Route path="/contratos">
                      <Route index element={<ContratoList />} />
                      <Route path="create" element={<ContratoCreate />} />
                      <Route path="edit/:id" element={<ContratoEdit />} />
                      <Route path="show/:id" element={<ContratoShow />} />
                    </Route>
                    <Route path="/documentos_veiculo">
                      <Route index element={<DocumentosVeiculoList />} />
                      <Route path="create" element={<DocumentosVeiculoCreate />} />
                      <Route path="edit/:id" element={<DocumentosVeiculoEdit />} />
                      <Route path="show/:id" element={<DocumentosVeiculoShow />} />
                    </Route>
                    <Route path="/checklist_diario" element={<MuiInferencer />}>
                      <Route index element={<Checklist_diarioList />} />
                      <Route path="create" element={<Checklist_diarioCreate />} />
                      <Route path="edit/:id" element={<Checklist_diarioEdit />} />
                      <Route path="show/:id" element={<Checklist_diarioShow />} />
                    </Route>
                    <Route path="/calculo_horas_motorista" element={<MuiInferencer />}>
                      <Route index element={<Calculo_horas_motoristaList />} />
                      <Route path="create" element={<Calculo_horas_motoristaCreate />} />
                      <Route path="edit/:id" element={<Calculo_horas_motoristaEdit />} />
                      <Route path="show/:id" element={<Calculo_horas_motoristaShow />} />
                    </Route>
                    <Route path="/avaliacao_usuario" element={<MuiInferencer />}>
                      <Route index element={<Avaliacao_usuarioList />} />
                      <Route path="create" element={<Avaliacao_usuarioCreate />} />
                      <Route path="edit/:id" element={<Avaliacao_usuarioEdit />} />
                      <Route path="show/:id" element={<Avaliacao_usuarioShow />} />
                    </Route>
                    <Route path="/documentos_usuario" element={<MuiInferencer />}>
                      <Route index element={<Documentos_usuarioList />} />
                      <Route path="create" element={<Documentos_usuarioCreate />} />
                      <Route path="edit/:id" element={<Documentos_usuarioEdit />} />
                      <Route path="show/:id" element={<Documentos_usuarioShow />} />
                    </Route>
                    <Route path="/categorias" element={<MuiInferencer />}>
                      <Route index element={<CategoriasList />} />
                      <Route path="create" element={<CategoriasCreate />} />
                      <Route path="edit/:id" element={<CategoriasEdit />} />
                      <Route path="show/:id" element={<CategoriasShow />} />
                    </Route>
                   
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route
                      path="/login"
                      element={
                        <AuthPage
                          type="login"
                          formProps={{
                            defaultValues: {
                              email: "info@refine.dev",
                              password: "refine-supabase",
                            },
                          }}
                        />
                      }
                    />
                    <Route
                      path="/register"
                      element={<AuthPage type="register" />}
                    />
                    <Route
                      path="/forgot-password"
                      element={<AuthPage type="forgotPassword" />}
                    />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />

                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>)
  );
}

export default App;
