/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import { ImZoomIn } from 'react-icons/im';
// import { ImZoomOut } from 'react-icons/im';
// import { IoHome } from 'react-icons/io5';
// import { IoHandRight } from 'react-icons/io5';
// import { BsArrowBarLeft } from 'react-icons/bs';
// import { BsArrowBarRight } from 'react-icons/bs';
// import { MdOutlineWindow } from 'react-icons/md';              
import { CgFlagAlt } from 'react-icons/cg';
import { ImCross } from 'react-icons/im';
// import { FcRuler } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
// import Dropdown from './Dropdown'
import './navbar.css';

// // import Sidebar from "./Sidebar";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const navigation = [
  { name: 'Dashboard', src: '#', current: true },
  { name: 'Team', src: '#', current: false },
  { name: 'Projects', src: '#', current: false },
  { name: 'Calendar', src: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Available Bulk Land Parcels', `64(23055.30 acs)`),
  createData('Available Industrial Parks', `84(22060.97 acs)`),
  createData('Available SEZ', `6(4958.17 acs)`),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Navbar() {

  const [showSidebar, setShowSidebar] = useState(false);

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 999,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <Disclosure as="nav" id='sticky' className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-start mr-20">
                <div className="flex-shrink-0 flex items-center">
                  <div class="flex">
                    <div class="flex items-center mr-4">

                      <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <IconContext.Provider value={{ color: 'red', size: '24px' }}>
                        <>
                          <div className='ml-2'>
                            <CgFlagAlt />
                          </div>
                        </>
                      </IconContext.Provider>
                      <label for="inline-checkbox" class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Bulk Land</label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <IconContext.Provider value={{ color: 'yellow', size: '24px' }}>
                        <>
                          <div className='ml-2'>
                            <CgFlagAlt />
                          </div>
                        </>
                      </IconContext.Provider>
                      <label for="inline-2-checkbox" class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Industrial Park</label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <IconContext.Provider value={{ color: 'green', size: '24px' }}>
                        <>
                          <div className='ml-2'>
                            <CgFlagAlt />
                          </div>
                        </>
                      </IconContext.Provider>
                      <label for="inline-2-checkbox" class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">SEZ</label>
                    </div>
                  </div>

                </div>
              </div>

              {/* Center  Multiple Icons */}
              {/* <div className="absolute inset-y-0 right-0 mr-38 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">   */}
              {/* Zoom In */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button id="zoom" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                        <>
                          <Tooltip title="Zoom In">
                            <IconButton onclick="zoomTo(+1)">
                              <ImZoomIn />
                            </IconButton>
                          </Tooltip>
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* Zoom Out */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                        <>
                          <Tooltip title="Zoom Out">
                            <IconButton>
                              <ImZoomOut />
                            </IconButton>
                          </Tooltip>  
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* Home */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                        <>
                        <Tooltip title="Home">
                            <IconButton>
                              <IoHome />
                            </IconButton>
                          </Tooltip>  
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* Arrow Bar Left */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                        <>
                          <Tooltip title="Go Back">
                              <IconButton>
                                <BsArrowBarLeft />
                              </IconButton>
                          </Tooltip>  
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* Arrow Bar Right */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                        <>
                          <Tooltip title="Go Next">
                            <IconButton>
                              <BsArrowBarRight />
                            </IconButton>
                          </Tooltip>      
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* Hand Right */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                        <>
                        <Tooltip title="Pan">
                              <IconButton>
                                <IoHandRight />
                              </IconButton>
                        </Tooltip>   
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* Deactivate */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                        <>
                          <Tooltip title="Deactivate">
                              <IconButton>
                                <ImCross />
                              </IconButton>
                          </Tooltip>   
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>                
                </Menu> */}

              {/* Deactivatement */}
              {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '24px' }}>
                        <>
                          <Tooltip title="Mesure">
                            <IconButton>
                                <FcRuler />
                            </IconButton>
                          </Tooltip>                 
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                </Menu> */}
              {/* </div> */}

              {/* Layers and Basemap */}

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Available Land dropdown */}

                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full mr-2">
                      <span className="sr-only">Open user menu</span>
                      <>
                        <button
                          type="button"
                          class="bg-blue-500 mr-6 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                        >
                          Available Land
                        </button>
                      </>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-84 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            src="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                                <TableBody>
                                  {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                      <StyledTableCell component="th" scope="row">
                                        {row.name}
                                      </StyledTableCell>
                                      <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>

                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Base Maps */}
                {/* <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                      <span className="sr-only">Open user menu</span>
                      <IconContext.Provider value={{ color: 'white', size: '26px' }}>
                        <>
                          <Tooltip title="Basemaps">
                              <IconButton>
                                <MdOutlineWindow />
                              </IconButton>
                          </Tooltip>
                        </>
                      </IconContext.Provider>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-38 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            src="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <img 
                              src='https://www.arcgis.com/sharing/rest/content/items/043bedab3b724c88933e89e9d497e0bb/info/thumbnail/natgeo.jpg'>
                            </img>
                            <p 
                              class="text-center pt-2"
                              >
                                National Geographic
                            </p>

                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            src="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <img 
                              src='https://www.arcgis.com/sharing/rest/content/items/799805972b604b2fb6f77de892682008/info/thumbnail/india_oceans.jpg'>
                            </img>
                            <p 
                              class="text-center pt-2"
                              >
                              Oceans
                            </p>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            src="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <img 
                              src='https://www.arcgis.com/sharing/rest/content/items/03fa5803f00f40bca9880e63581216b6/info/thumbnail/india_streets.jpg'>
                            </img>
                            <p 
                              class="text-center pt-2"
                              >
                                Streets
                            </p>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            src="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <img
                              src='https://www.arcgis.com/sharing/rest/content/items/86de95d4e0244cba80f0fa2c9403a7b2/info/thumbnail/thumbnail1591224931210.jpeg'>
                            </img>
                            <p 
                              class="text-center pt-2"
                              >
                                Imagery
                            </p>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}

                {/* Layers dropdown */}

                <Menu as="div" className="relative">
                  {/* <Dropdown /> */}
                </Menu>
              </div>

              {/* Sidebar */}

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Available Land dropdown */}

                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full mr-2">
                      <span className="sr-only">Open user menu</span>
                      <>
                        {showSidebar ? (

                          <button
                            className="flex text-4xl text-white items-center cursor-pointer right-6 top-5 z-50"
                            onClick={() => setShowSidebar(!showSidebar)}
                          >
                            <IconContext.Provider value={{ color: 'white', size: '22px' }}>
                              <ImCross />
                            </IconContext.Provider>
                          </button>

                        ) : (
                          <Tooltip title="Select Your Land Parcel">
                            <IconButton>
                              <svg
                                onClick={() => setShowSidebar(!showSidebar)}
                                className="z-30 flex items-center cursor-pointer top-4"
                                fill="#ffffff"
                                viewBox="0 0 100 60"
                                width="28"
                                height="30"
                              >
                                <rect width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                              </svg>
                            </IconButton>
                          </Tooltip>

                        )}

                        <div
                          className={`top-16 overflow-auto right-0 w-[38vw] bg-gray-800 p-4 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                            }`}
                        >

                          <div>
                            <Accordion className='p-0'>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography>Select Your Land Parcel</Typography>
                              </AccordionSummary>

                              <AccordionDetails>
                                <div className={classes.root}>
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-label="Expand"
                                      aria-controls="additional-actions1-content"
                                      id="additional-actions1-header"
                                    >
                                      <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox indeterminate />}
                                        label="Search Land within a District"
                                      />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <div>

                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel
                                            htmlFor="grouped-native-select"
                                          >
                                            Select District
                                          </InputLabel>
                                          <Select native defaultValue="" id="grouped-native-select" label="Select District">
                                            <option aria-label="None" value="" />
                                            <optgroup label="Category 1">
                                              <option value={1}>Option 1</option>
                                              <option value={2}>Option 2</option>
                                            </optgroup>
                                            <optgroup label="Category 2">
                                              <option value={3}>Option 3</option>
                                              <option value={4}>Option 4</option>
                                            </optgroup>
                                          </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel
                                            htmlFor="grouped-select"
                                          >Select Location</InputLabel>
                                          <Select defaultValue="" id="grouped-select" label="Select Location">
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <ListSubheader>Category 1</ListSubheader>
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                            <ListSubheader>Category 2</ListSubheader>
                                            <MenuItem value={3}>Option 3</MenuItem>
                                            <MenuItem value={4}>Option 4</MenuItem>
                                          </Select>
                                        </FormControl>
                                      </div>

                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-label="Expand"
                                      aria-controls="additional-actions2-content"
                                      id="additional-actions2-header"
                                    >
                                      <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox indeterminate />}
                                        label="Search Land near an Airport"
                                      />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <div>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel htmlFor="grouped-native-select">Select Airport</InputLabel>
                                          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                            <option aria-label="None" value="" />
                                            <optgroup label="Category 1">
                                              <option value={1}>Option 1</option>
                                              <option value={2}>Option 2</option>
                                            </optgroup>
                                            <optgroup label="Category 2">
                                              <option value={3}>Option 3</option>
                                              <option value={4}>Option 4</option>
                                            </optgroup>
                                          </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel htmlFor="grouped-select">select Radius(km)</InputLabel>
                                          <Select defaultValue="" id="grouped-select" label="Grouping">
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <ListSubheader>Category 1</ListSubheader>
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                            <ListSubheader>Category 2</ListSubheader>
                                            <MenuItem value={3}>Option 3</MenuItem>
                                            <MenuItem value={4}>Option 4</MenuItem>
                                          </Select>
                                        </FormControl>
                                      </div>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-label="Expand"
                                      aria-controls="additional-actions2-content"
                                      id="additional-actions2-header"
                                    >
                                      <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox indeterminate />}
                                        label="Search Land near a Seaport"
                                      />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <div>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel htmlFor="grouped-native-select">Select Seaport</InputLabel>
                                          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                            <option aria-label="None" value="" />
                                            <optgroup label="Category 1">
                                              <option value={1}>Option 1</option>
                                              <option value={2}>Option 2</option>
                                            </optgroup>
                                            <optgroup label="Category 2">
                                              <option value={3}>Option 3</option>
                                              <option value={4}>Option 4</option>
                                            </optgroup>
                                          </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel htmlFor="grouped-select">select Radius(km)</InputLabel>
                                          <Select defaultValue="" id="grouped-select" label="Grouping">
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <ListSubheader>Category 1</ListSubheader>
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                            <ListSubheader>Category 2</ListSubheader>
                                            <MenuItem value={3}>Option 3</MenuItem>
                                            <MenuItem value={4}>Option 4</MenuItem>
                                          </Select>
                                        </FormControl>
                                      </div>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-label="Expand"
                                      aria-controls="additional-actions2-content"
                                      id="additional-actions2-header"
                                    >
                                      <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox indeterminate />}
                                        label="Search Land near a Railway Station"
                                      />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <div>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel htmlFor="grouped-native-select">Select Railway Station</InputLabel>
                                          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                            <option aria-label="None" value="" />
                                            <optgroup label="Category 1">
                                              <option value={1}>Option 1</option>
                                              <option value={2}>Option 2</option>
                                            </optgroup>
                                            <optgroup label="Category 2">
                                              <option value={3}>Option 3</option>
                                              <option value={4}>Option 4</option>
                                            </optgroup>
                                          </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 170 }}>
                                          <InputLabel htmlFor="grouped-select">select Radius(km)</InputLabel>
                                          <Select defaultValue="" id="grouped-select" label="Grouping">
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <ListSubheader>Category 1</ListSubheader>
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                            <ListSubheader>Category 2</ListSubheader>
                                            <MenuItem value={3}>Option 3</MenuItem>
                                            <MenuItem value={4}>Option 4</MenuItem>
                                          </Select>
                                        </FormControl>
                                      </div>
                                    </AccordionDetails>
                                  </Accordion>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        </div>
                      </>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  src={item.src}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
