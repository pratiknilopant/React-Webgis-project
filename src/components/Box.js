import * as React from 'react';
import handclick from '../images/handclick.png'
import handcursor from '../images/hand-cursor.png'
import strip from '../images/strip4.png'
import estate from '../images/estate.png'
import road from '../images/road.png'
import Plot from '../images/Plot.png'
import dimension from '../images/dimension.png'
import corridor from '../images/corridor.png'

export default function CheckboxListSecondary() {

  return (
    <>
      <div class="w-1/3	 float-right -mt-44 mr-4 rounded-lg dark:text-white z-0	">
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-t border-l border-r border-white dark:border-white dark:hover:text-white ">
          <img class="mr-2 w-18 h-8 fill-current" alt='' src={strip} />
        </button>
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-l border-r border-gray-200 dark:border-white  dark:hover:text-white ">
          <img class="mr-2 w-6 h-6 fill-current" alt='' src={handclick} />
          : Move cursor over a district/icon to get preliminary info
        </button>
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-l border-r rounded-b-lg dark:border-white dark:hover:text-white ">
          <img class="mr-2 w-6 h-6 fill-current" alt='' src={handcursor} />
          : Click on a district to see available land parcels
        </button>
      </div>
      <div class="w-44 float-left -mt-[18%] ml-4 rounded-lg dark:text-white z-0">
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-t border-l border-r border-white dark:border-white dark:hover:text-white ">
          <img class="mr-2 w-4 h-4 fill-current" alt='' src={estate} />
          : Estate
        </button>
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-l border-r border-gray-200 dark:border-white  dark:hover:text-white ">
          <img class="mr-2 w-4 h-4 fill-current" alt='' src={road} />
          : Road
        </button>
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-l border-r border-gray-200 focus:z-10 dark:border-white dark:hover:text-white ">
          <img class="mr-2 w-4 h-4 fill-current" alt='' src={Plot} />
          : Plot
        </button>
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-l border-r border-gray-200 focus:z-10 dark:border-white dark:hover:text-white ">
          <img class="mr-2 w-4 h-4 fill-current" alt='' src={dimension} />
          : Dimension
        </button>
        <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-l border-r rounded-b-lg dark:border-white dark:hover:text-white ">
          <img class="mr-2 w-4 h-4 fill-current" alt='' src={corridor} />
          : Corridor
        </button>
      </div>
    </>
  );
}
