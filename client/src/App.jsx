import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Reg from './reg/Reg'
import Log from './auth/Auth'
import { useSelector } from 'react-redux'
import MainPage from './MainPage'
import Spet from './spet.jsx'
import About from './about.jsx'
import Contacts from './contacts.jsx'
import Bur from './bur.jsx'
import Bjd from './bjd.jsx'
import Istoria from './isroria.jsx'
import Fizika from './fizika.jsx'
import Liter from './liter.jsx'
import English from './english.jsx'
import Geogr from './geogr.jsx'
import Russn from './russn.jsx'
import Himia from './himia.jsx'
import Obsh from './obsh.jsx'
import Inform from './inform.jsx'
import Biology from './biology.jsx'
import Fizra from './fizra.jsx'
import Mathem from './mathem.jsx'
import Indiv from './indiv.jsx'
import Bzh from './bzh.jsx'
import Istoriaru from './historyru.jsx'
import Historyru from './historyru.jsx'
import Fizra2 from './fizra2.jsx'
import Fingramm from './fingram.jsx'
import Berezh from './berezh.jsx'
import Proenglish from './proenglish.jsx'
import Inzhen from './inzhen.jsx'
import Mathmethods from './mathmethods.jsx'
import Matmethods from './mathmethods.jsx'
import El from './el.jsx'
import Mech from './mech.jsx'
import Geology from './geology.jsx'
import Priklcomp from './priklcomp.jsx'
import Prav from './prav.jsx'
import Ohr from './ohr.jsx'
import Ekol from './ekol.jsx'
import Techbur from './techbur.jsx'
import Uchprak from './uchprak1.jsx'
import Expbur from './expbur.jsx'
import Uchprak1 from './uchprak1.jsx'
import Uchprak2 from './uchprak2.jsx'
import Osnplan from './osnplan.jsx'
import Uchprak3 from './uchprak3.jsx'
import Expskv from './expskv.jsx'
import Uchprak4 from './uchprak4.jsx'
import Caprem from './caprem.jsx'
import Uchprak5 from './uchprak5.jsx'
import Expgaz from './expgaz.jsx'
import Osnfil from './osnfil.jsx'
import Metrol from './metrol.jsx'
import Informtech from './informtech.jsx'
import Osnekom from './osnekom.jsx'
import Pravosn from './pravosn.jsx'
import Razgaz from './razgaz.jsx'
import Exgaz from './exgaz.jsx'
import Expneft from './expneft.jsx'
import Osnorg from './osnorg.jsx'
import Techis from './techis.jsx'
import Techcontrol from './techcontrol.jsx'
import Psyob from './psyob.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth" />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Log />
  },



  {
    path: '/*',
    element: <Navigate to="/"/>
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
  {
    path: '/spet',
    element: <Spet />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/bur',
    element: <Bur />
  },
  {
    path: '/bjd',
    element: <Bjd />
  },
  {
    path: '/istoria',
    element: <Istoria />
  },
  {
    path: '/historyru',
    element: <Historyru/>
  },
  {
    path: '/fizika',
    element: <Fizika />
  },
  {
    path: '/liter',
    element: <Liter />
  },
  {
    path: '/english',
    element: <English />
  },
  {
    path: '/proenglish',
    element: <Proenglish />
  },
  {
    path: '/geogr',
    element: <Geogr />
  },
  {
    path: '/russn',
    element: <Russn />
  },
  {
    path: '/himia',
    element: <Himia />
  },
  {
    path: '/obsh',
    element: <Obsh />
  },
  {
    path: '/inform',
    element: <Inform />
  },
  {
    path: '/biology',
    element: <Biology />
  },
  {
    path: '/fizra',
    element: <Fizra />
  },
  {
    path: '/mathem',
    element: <Mathem />
  },
  {
    path: '/indiv',
    element: <Indiv />
  },
  {
    path: '/bzh',
    element: <Bzh/>
  },
  {
    path: '/fingram',
    element: <Fingramm/>
  },
  {
    path: '/bere',
    element: <Berezh/>
  },
  {
    path: '/inzhen',
    element: <Inzhen/>
  },
  {
    path: '/el',
    element: <El/>
  },
  {
    path: '/mathmethods',
    element: <Matmethods/>
  },
  {
    path: '/mech',
    element: <Mech/>
  },
  {
    path: '/geology',
    element: <Geology/>
  },
  {
    path: '/priklcomp',
    element: <Priklcomp/>
  },
  {
    path: '/prav',
    element: <Prav/>
  },
  {
    path: '/ohr',
    element: <Ohr/>
  },
  {
    path: '/ekol',
    element: <Ekol/>
  },
  {
    path: '/techbur',
    element: <Techbur/>
  },
  {
    path: '/uchprak1',
    element: <Uchprak/>
  },
  {
    path: '/expbur',
    element: <Expbur/>
  },
  {
    path: '/uchprak2',
    element: <Uchprak2/>
  },
  {
    path: '/osnplan',
    element: <Osnplan/>
  },
  {
    path: '/uchprak3',
    element: <Uchprak3/>
  },
  {
    path: '/expskv',
    element: <Expskv/>
  },
  {
    path: '/uchprak4',
    element: <Uchprak4/>
  },
  {
    path: '/caprem',
    element: <Caprem/>
  },
  {
    path: '/uchprak5',
    element: <Uchprak5/>
  },
  {
    path: '/expgaz',
    element: <Expgaz/>
  },
  {
    path: '/osnfil',
    element: <Osnfil/>
  },
  {
    path: '/metrol',
    element: <Metrol/>
  },
  {
    path: '/informtech',
    element: <Informtech/>
  },
  {
    path: '/osnekom',
    element: <Osnekom/>
  },
  {
    path: '/pravosn',
    element: <Pravosn/>
  },
  {
    path: '/razgaz',
    element: <Razgaz/>
  },
  {
    path: '/expneft',
    element: <Expneft/>
  },
  {
    path: '/osnorg',
    element: <Osnorg/>
  },
  {
    path: '/techis',
    element: <Techis/>
  },
  {
    path: '/techcontrol',
    element: <Techcontrol/>
  },
  {
    path: '/psyob',
    element: <Psyob/>
  },

  {
    path: '/*',
    element: <Navigate to="/"/>
  },
])

const authRouterAdmin = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
  {
    path: 'admin',
    element: <>admin</>
  },
  {
    path: '/spet',
    element: <Spet />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/bur',
    element: <Bur />
  },
  {
    path: '/bjd',
    element: <Bjd />
  },
  {
    path: '/istoria',
    element: <Istoria />
  },
  {
    path: '/historyru',
    element: <Historyru/>
  },
  {
    path: '/fizika',
    element: <Fizika />
  },
  {
    path: '/liter',
    element: <Liter />
  },
  {
    path: '/english',
    element: <English />
  },
  {
    path: '/proenglish',
    element: <Proenglish />
  },
  {
    path: '/geogr',
    element: <Geogr />
  },
  {
    path: '/russn',
    element: <Russn />
  },
  {
    path: '/himia',
    element: <Himia />
  },
  {
    path: '/obsh',
    element: <Obsh />
  },
  {
    path: '/inform',
    element: <Inform />
  },
  {
    path: '/biology',
    element: <Biology />
  },
  {
    path: '/fizra',
    element: <Fizra />
  },
  {
    path: '/fizra2',
    element: <Fizra2 />
  },
  {
    path: '/mathem',
    element: <Mathem />
  },
  {
    path: '/indiv',
    element: <Indiv />
  },
  {
    path: '/bzh',
    element: <Bzh/>
  },
  {
    path: '/bzh',
    element: <Bzh/>
  },
  {
    path: '/fingram',
    element: <Fingramm/>
  },
  {
    path: '/bere',
    element: <Berezh/>
  },
  {
    path: '/inzhen',
    element: <Inzhen/>
  },
  {
    path: '/mathmethods',
    element: <Matmethods/>
  },
  {
    path: '/el',
    element: <El/>
  },
  {
    path: '/mech',
    element: <Mech/>
  },
  {
    path: '/geology',
    element: <Geology/>
  },
  {
    path: '/priklcomp',
    element: <Priklcomp/>
  },
  {
    path: '/prav',
    element: <Prav/>
  },
  {
    path: '/ohr',
    element: <Ohr/>
  },
  {
    path: '/ekol',
    element: <Ekol/>
  },
  {
    path: '/techbur',
    element: <Techbur/>
  },
  {
    path: '/uchprak1',
    element: <Uchprak1/>
  },
  {
    path: '/expbur',
    element: <Expbur/>
  },
  {
    path: '/uchprak2',
    element: <Uchprak2/>
  },
  {
    path: '/osnplan',
    element: <Osnplan/>
  },
  {
    path: '/uchprak3',
    element: <Uchprak3/>
  },
  {
    path: '/expskv',
    element: <Expskv/>
  },
  {
    path: '/uchprak4',
    element: <Uchprak4/>
  },
  {
    path: '/caprem',
    element: <Caprem/>
  },
  {
    path: '/uchprak5',
    element: <Uchprak5/>
  },
  {
    path: '/expgaz',
    element: <Expgaz/>
  },
  {
    path: '/osnfil',
    element: <Osnfil/>
  },
  {
    path: '/metrol',
    element: <Metrol/>
  },
  {
    path: '/informtech',
    element: <Informtech/>
  },
  {
    path: '/osnekom',
    element: <Osnekom/>
  },
  {
    path: '/pravosn',
    element: <Pravosn/>
  },
  {
    path: '/razgaz',
    element: <Razgaz/>
  },
  {
    path: '/exgaz',
    element: <Exgaz/>
  },
  {
    path: '/expneft',
    element: <Expneft/>
  },
  {
    path: '/osnorg',
    element: <Osnorg/>
  },
  {
    path: '/techis',
    element: <Techis/>
  },
  {
    path: '/techcontrol',
    element: <Techcontrol/>
  },
  {
    path: '/psyob',
    element: <Psyob/>
  },





  {
    path: '/*',
    element: <Navigate to="/"/>
  },
])

function App() {

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  console.log(token);


  return (
    token ? role === "ADMIN" ? <RouterProvider router={authRouterAdmin} /> : <RouterProvider router={authRouter} /> :
    <RouterProvider router={router} />
  )
}

export default App
