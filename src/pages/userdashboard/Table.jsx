import React from 'react'

const Table = () => {
    return (
        <section class="bg-white pt-14">
            <div class="mx-auto">

                <div class="bg-white relative overflow-hidden">

                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-4 py-3">Name</th>
                                    <th scope="col" class="px-4 py-3">Amount</th>
                                    <th scope="col" class="px-4 py-3">Payment Type</th>
                                    <th scope="col" class="px-4 py-3">Date</th>
                                    <th scope="col" class="px-4 py-3">Staus</th>
                                    <th scope="col" class="px-4 py-3">
                                        <span class="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b ">
                                    <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>
                                    <td class="px-4 py-3">$300</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">12-4-1998</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-imac-27-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>
                                     <td class="px-4 py-3">$200</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">12-4-1998</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-imac-20-dropdown-button" data-dropdown-toggle="apple-imac-20-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-imac-20-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-20-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>
                                    <td class="px-4 py-3">$1237</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">12-4-1998</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-iphone-14-dropdown-button" data-dropdown-toggle="apple-iphone-14-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-iphone-14-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-iphone-14-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>
                                                               <td class="px-4 py-3">Tablet</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">12-4-1998</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-ipad-air-dropdown-button" data-dropdown-toggle="apple-ipad-air-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-ipad-air-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-ipad-air-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>                            <td class="px-4 py-3">Gaming/Console</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">12-4-1998</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="xbox-series-s-dropdown-button" data-dropdown-toggle="xbox-series-s-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="xbox-series-s-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-s-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>                            <td class="px-4 py-3">Gaming/Console</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">78</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="playstation-5-dropdown-button" data-dropdown-toggle="playstation-5-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="playstation-5-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="playstation-5-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>                            <td class="px-4 py-3">Gaming/Console</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">200</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="xbox-series-x-dropdown-button" data-dropdown-toggle="xbox-series-x-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="xbox-series-x-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-x-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>                           <td class="px-4 py-3">Watch</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">657</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-watch-se-dropdown-button" data-dropdown-toggle="apple-watch-se-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-watch-se-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-watch-se-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>                           <td class="px-4 py-3">Photo</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">465</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="nikon-d850-dropdown-button" data-dropdown-toggle="nikon-d850-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b ">
                                <div className="flex px-4 py-3 items-center gap-2">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-5 h-5 bg-gray-100 border-grey rounded text-primary-600 focus:ring-primary-500 "></input>
                                        <h1 className="bg-light text-orange font-inter text-[15px] font-[600] p-2 w-12 h-12 flex items-center justify-center rounded-full">E</h1>
                                        <div>
                                            <th scope="row" class=" font-medium text-black whitespace-nowrap">Emery Torff</th>
                                            <p>thekdfisher@email.com</p>
                                        </div>
                                    </div>                           <td class="px-4 py-3">TV/Monitor</td>
                                    <h1 className="bg-light font-inter text-[14px] text-[#AD3307] font-[500] text-orange p-2 w-fit rounded-full">Label</h1>
                                    <td class="px-4 py-3">354</td>
                                    <td><p  class=" bg-light text-orange p-2 w-fit font-inter text-[14px] text-[#AD3307] font-[500] rounded-full">Success</p></td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="benq-ex2710q-dropdown-button" data-dropdown-toggle="benq-ex2710q-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="benq-ex2710q-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="benq-ex2710q-dropdown-button">
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav class="flex flex-col md:flex-row justify-end items-end md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        
                        <ul class="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700  dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">100</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Table
