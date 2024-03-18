import React, { useMemo, useState } from 'react'
import './ReactTable.css'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'

const ReactTable = () => {

    const data = useMemo(() => [{ "_id": 1, "name": "Brooks", "gender": "Lincey", "salary": "blincey0@etsy.com" },
    { "_id": 2, "name": "Nady", "gender": "Lawrence", "salary": "nlawrence1@harvard.edu" },
    { "_id": 3, "name": "Thomasine", "gender": "Luter", "salary": "tluter2@bbb.org" },
    { "_id": 4, "name": "Sabra", "gender": "Gleaves", "salary": "sgleaves3@marriott.com" },
    { "_id": 5, "name": "Jewell", "gender": "Oldred", "salary": "joldred4@zimbio.com" },
    { "_id": 6, "name": "Mari", "gender": "Graeser", "salary": "mgraeser5@sakura.ne.jp" },
    { "_id": 7, "name": "Florence", "gender": "Kleinpeltz", "salary": "fkleinpeltz6@paypal.com" },
    { "_id": 8, "name": "Cirstoforo", "gender": "Knok", "salary": "cknok7@chron.com" },
    { "_id": 9, "name": "Erek", "gender": "Hand", "salary": "ehand8@tamu.edu" },
    { "_id": 10, "name": "Marlo", "gender": "Paulillo", "salary": "mpaulillo9@gov.uk" },
    { "_id": 11, "name": "Bendick", "gender": "Daunay", "salary": "bdaunaya@cocolog-nifty.com" },
    { "_id": 12, "name": "Osgood", "gender": "Ondrasek", "salary": "oondrasekb@twitpic.com" },
    { "_id": 13, "name": "Siouxie", "gender": "Japp", "salary": "sjappc@myspace.com" },
    { "_id": 14, "name": "Bat", "gender": "Lanahan", "salary": "blanahand@aboutads.info" },
    { "_id": 15, "name": "Evelyn", "gender": "Ringer", "salary": "eringere@sun.com" },
    { "_id": 16, "name": "Madonna", "gender": "Keenan", "salary": "mkeenanf@fotki.com" },
    { "_id": 17, "name": "La verne", "gender": "Liccardi", "salary": "lliccardig@amazon.com" },
    { "_id": 18, "name": "Korney", "gender": "Beare", "salary": "kbeareh@salon.com" },
    { "_id": 19, "name": "Phyllida", "gender": "Von Welden", "salary": "pvonweldeni@blinklist.com" },
    { "_id": 20, "name": "Charmian", "gender": "Brenstuhl", "salary": "cbrenstuhlj@techcrunch.com" },
    { "_id": 21, "name": "Costanza", "gender": "Deverock", "salary": "cdeverockk@nyu.edu" },
    { "_id": 22, "name": "Adaline", "gender": "Jeffery", "salary": "ajefferyl@goo.ne.jp" },
    { "_id": 23, "name": "Ambrosi", "gender": "McLennan", "salary": "amclennanm@msu.edu" },
    { "_id": 24, "name": "Charissa", "gender": "Evert", "salary": "cevertn@vkontakte.ru" },
    { "_id": 25, "name": "Vic", "gender": "Coultous", "salary": "vcoultouso@printfriendly.com" },
    { "_id": 26, "name": "Darbie", "gender": "Baldetti", "salary": "dbaldettip@bbc.co.uk" },
    { "_id": 27, "name": "Athene", "gender": "Sutter", "salary": "asutterq@wordpress.com" },
    { "_id": 28, "name": "Francois", "gender": "Sapauton", "salary": "fsapautonr@wsj.com" },
    { "_id": 29, "name": "Chandra", "gender": "Egiloff", "salary": "cegiloffs@bloglovin.com" },
    { "_id": 30, "name": "Renell", "gender": "Matsell", "salary": "rmatsellt@merriam-webster.com" },
    { "_id": 31, "name": "Corny", "gender": "Souness", "salary": "csounessu@privacy.gov.au" },
    { "_id": 32, "name": "Lorena", "gender": "Pote", "salary": "lpotev@issuu.com" },
    { "_id": 33, "name": "Cary", "gender": "Batts", "salary": "cbattsw@aol.com" },
    { "_id": 34, "name": "Cindie", "gender": "Ternott", "salary": "cternottx@chicagotribune.com" },
    { "_id": 35, "name": "Land", "gender": "Ounsworth", "salary": "lounsworthy@utexas.edu" },
    { "_id": 36, "name": "Meredeth", "gender": "Kastel", "salary": "mkastelz@cargocollective.com" },
    { "_id": 37, "name": "Nichol", "gender": "Brazelton", "salary": "nbrazelton10@ifeng.com" },
    { "_id": 38, "name": "Lindi", "gender": "O'Loughane", "salary": "loloughane11@digg.com" },
    { "_id": 39, "name": "Madelin", "gender": "Henbury", "salary": "mhenbury12@google.nl" },
    { "_id": 40, "name": "Byrle", "gender": "Cinnamond", "salary": "bcinnamond13@desdev.cn" },
    { "_id": 41, "name": "Chadwick", "gender": "Dalziel", "salary": "cdalziel14@nytimes.com" },
    { "_id": 42, "name": "Bartholomew", "gender": "Bittany", "salary": "bbittany15@deliciousdays.com" },
    { "_id": 43, "name": "Otis", "gender": "Rapson", "salary": "orapson16@buzzfeed.com" },
    { "_id": 44, "name": "Bonnie", "gender": "Iddons", "salary": "biddons17@jimdo.com" },
    { "_id": 45, "name": "Arther", "gender": "Le Marchant", "salary": "alemarchant18@arizona.edu" },
    { "_id": 46, "name": "Annadiane", "gender": "Guitonneau", "salary": "aguitonneau19@e-recht24.de" },
    { "_id": 47, "name": "Doris", "gender": "Abrahamsson", "salary": "dabrahamsson1a@newyorker.com" },
    { "_id": 48, "name": "Linell", "gender": "Graddon", "salary": "lgraddon1b@blog.com" },
    { "_id": 49, "name": "Vanny", "gender": "Stuttard", "salary": "vstuttard1c@nps.gov" },
    { "_id": 50, "name": "Fidel", "gender": "Retallack", "salary": "fretallack1d@w3.org" },
    { "_id": 51, "name": "Harvey", "gender": "Matveiko", "salary": "hmatveiko1e@wordpress.org" },
    { "_id": 52, "name": "Brooks", "gender": "Baber", "salary": "bbaber1f@is.gd" },
    { "_id": 53, "name": "Claretta", "gender": "Sissot", "salary": "csissot1g@webeden.co.uk" },
    { "_id": 54, "name": "Kiri", "gender": "Brizell", "salary": "kbrizell1h@wix.com" },
    { "_id": 55, "name": "Afton", "gender": "McGilmartin", "salary": "amcgilmartin1i@arizona.edu" },
    { "_id": 56, "name": "Mabelle", "gender": "Martonfi", "salary": "mmartonfi1j@bloglines.com" },
    { "_id": 57, "name": "Belva", "gender": "Keighley", "salary": "bkeighley1k@google.es" },
    { "_id": 58, "name": "Anatol", "gender": "Stearnes", "salary": "astearnes1l@nature.com" },
    { "_id": 59, "name": "Federico", "gender": "Dainter", "salary": "fdainter1m@xing.com" },
    { "_id": 60, "name": "Karlyn", "gender": "Thompson", "salary": "kthompson1n@opensource.org" },
    { "_id": 61, "name": "Saloma", "gender": "Weatherill", "salary": "sweatherill1o@tripod.com" },
    { "_id": 62, "name": "Burt", "gender": "Dives", "salary": "bdives1p@reference.com" },
    { "_id": 63, "name": "Corrianne", "gender": "Rawlinson", "salary": "crawlinson1q@goo.gl" },
    { "_id": 64, "name": "Dennie", "gender": "Northern", "salary": "dnorthern1r@intel.com" },
    { "_id": 65, "name": "Janeva", "gender": "Ritchie", "salary": "jritchie1s@opera.com" },
    { "_id": 66, "name": "Ogden", "gender": "Fontes", "salary": "ofontes1t@unicef.org" },
    { "_id": 67, "name": "Fons", "gender": "Corringham", "salary": "fcorringham1u@youtube.com" },
    { "_id": 68, "name": "Lazarus", "gender": "Mougeot", "salary": "lmougeot1v@hhs.gov" },
    { "_id": 69, "name": "Wat", "gender": "Drane", "salary": "wdrane1w@goo.gl" },
    { "_id": 70, "name": "Julianne", "gender": "Merigeau", "salary": "jmerigeau1x@zimbio.com" },
    { "_id": 71, "name": "Elmira", "gender": "Frier", "salary": "efrier1y@nationalgeographic.com" },
    { "_id": 72, "name": "Petronille", "gender": "Brierley", "salary": "pbrierley1z@drupal.org" },
    { "_id": 73, "name": "Lock", "gender": "Breissan", "salary": "lbreissan20@earthlink.net" },
    { "_id": 74, "name": "Tori", "gender": "Bloxholm", "salary": "tbloxholm21@prnewswire.com" },
    { "_id": 75, "name": "Kevon", "gender": "Aronowitz", "salary": "karonowitz22@theguardian.com" },
    { "_id": 76, "name": "Freda", "gender": "Ferry", "salary": "fferry23@cpanel.net" },
    { "_id": 77, "name": "Barbabas", "gender": "Skene", "salary": "bskene24@example.com" },
    { "_id": 78, "name": "Tatiana", "gender": "Durrant", "salary": "tdurrant25@msu.edu" },
    { "_id": 79, "name": "Cull", "gender": "Gershom", "salary": "cgershom26@gnu.org" },
    { "_id": 80, "name": "Merilyn", "gender": "Kingett", "salary": "mkingett27@blinklist.com" },
    { "_id": 81, "name": "Marj", "gender": "Waliszewski", "salary": "mwaliszewski28@vkontakte.ru" },
    { "_id": 82, "name": "Janice", "gender": "Bushrod", "salary": "jbushrod29@si.edu" },
    { "_id": 83, "name": "Mag", "gender": "Knightsbridge", "salary": "mknightsbridge2a@tamu.edu" },
    { "_id": 84, "name": "Halsey", "gender": "Gary", "salary": "hgary2b@vk.com" },
    { "_id": 85, "name": "Axel", "gender": "Mattiazzo", "salary": "amattiazzo2c@yolasite.com" },
    { "_id": 86, "name": "Lincoln", "gender": "Guido", "salary": "lguido2d@exblog.jp" },
    { "_id": 87, "name": "Dianne", "gender": "Galilee", "salary": "dgalilee2e@microsoft.com" },
    { "_id": 88, "name": "Gwendolin", "gender": "Fennell", "salary": "gfennell2f@cdbaby.com" },
    { "_id": 89, "name": "Malory", "gender": "MacFadyen", "salary": "mmacfadyen2g@mtv.com" },
    { "_id": 90, "name": "Katie", "gender": "Frankiewicz", "salary": "kfrankiewicz2h@spotify.com" },
    { "_id": 91, "name": "Leola", "gender": "Kinnoch", "salary": "lkinnoch2i@bandcamp.com" },
    { "_id": 92, "name": "Josefina", "gender": "Frascone", "salary": "jfrascone2j@globo.com" },
    { "_id": 93, "name": "Mireielle", "gender": "Comer", "salary": "mcomer2k@mlb.com" },
    { "_id": 94, "name": "Loydie", "gender": "Pitt", "salary": "lpitt2l@linkedin.com" },
    { "_id": 95, "name": "Burt", "gender": "McRobert", "salary": "bmcrobert2m@who.int" },
    { "_id": 96, "name": "Lauritz", "gender": "Gofforth", "salary": "lgofforth2n@tmall.com" },
    { "_id": 97, "name": "Lonnie", "gender": "Pengelley", "salary": "lpengelley2o@e-recht24.de" },
    { "_id": 98, "name": "Clarie", "gender": "Yurlov", "salary": "cyurlov2p@tamu.edu" },
    { "_id": 99, "name": "Russ", "gender": "Dade", "salary": "rdade2q@bloomberg.com" },
    { "_id": 100, "name": "Pietrek", "gender": "Midghall", "salary": "pmidghall2r@icq.com" }], [])

    const columns = [
        {
            header: "ID",
            accessorKey: "_id",
        },
        {
            header: "Name",
            accessorKey: "name"
        },
        {
            header: "Gender",
            accessorKey: "gender"
        },
        {
            header: "Salary",
            accessorKey: "salary"
        },
    ]


    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 10, //default page size
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
            columnVisibility: columnVisibility,
            pagination: pagination,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: (newPagination) => setPagination(newPagination),

    })

    console.log(table.getCanNextPage())


    const handlePageChange = (pageIndex) => {
        setPagination({ ...pagination, pageIndex })
    }

    const getPageRanges = () => {
        const { pageSize } = pagination;
        const pageCount = table.getPageCount();
        const pageRanges = [];
        let startIndex = 0;

        for (let i = 0; i < pageCount; i++) {
            const endIndex = Math.min(startIndex + pageSize, data.length);
            pageRanges.push({
                label: `${startIndex + 1} - ${endIndex}`,
                pageIndex: i,
            });
            startIndex = endIndex;
        }

        return pageRanges;
    }


    const getPaginationInfo = () => {
        const { pageIndex, pageSize } = pagination
        const currentRange = getPageRanges()[pageIndex]
        return currentRange ? currentRange.label : '1 - 1'
    }

    return (
        <div style={{ overflowX: 'auto' }}>
            <input
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
            />

            <div className="px-1 border-b border-black">
                <label>
                    <input
                        {...{
                            type: 'checkbox',
                            checked: table.getIsAllColumnsVisible(),
                            onChange: table.getToggleAllColumnsVisibilityHandler(),
                        }}
                    />{' '}
                    Toggle All
                </label>
            </div>

            {table.getAllLeafColumns().map(column => {
                return (
                    <div key={column.id} className="px-1">
                        <label>
                            <input
                                {...{
                                    type: 'checkbox',
                                    checked: column.getIsVisible(),
                                    onChange: column.getToggleVisibilityHandler(),
                                }}
                            />{' '}
                            {column.id}
                        </label>
                    </div>
                )
            })}
            <table className="w3-table w3-striped w3-border" style={{ overflowX: 'auto' }}>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                {flexRender(header.column.columnDef.header, header.getContext())}

                                {
                                    { asc: 'A', desc: 'D' }[header.column.getIsSorted() ?? null]
                                }
                            </th>)}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {
                                row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <button disabled={!table.getCanPreviousPage()} onClick={() => table.setPageIndex(0)}>First Page</button>
                <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
                <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
                <button disabled={!table.getCanNextPage()} onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last Page</button>


                <p>Showing <select
                    value={pagination.pageIndex}
                    onChange={(e) => handlePageChange(Number(e.target.value))}
                >
                    {getPageRanges().map((range) => (
                        <option key={range.pageIndex} value={range.pageIndex}>
                            {range.pageIndex === table.getPageCount() - 1
                                ? `${range.label.split('-')[0]} - ${data.length}` // Adjust label for last page
                                : range.label}
                        </option>
                    ))}
                </select> of {table.getPageCount()}</p>
            </div>
        </div>
    )
}

export default ReactTable

