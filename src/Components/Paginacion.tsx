interface PropsPagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PAGINACION_COMPONENT = (props: PropsPagination) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-4">
            <nav>
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <button
                            onClick={() => props.onPageChange(props.currentPage - 1)}
                            disabled={props.currentPage === 1}
                            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map(i => (
                        <li key={i}>
                            <button
                                onClick={() => props.onPageChange(i)}
                                className={`px-3 py-2 leading-tight ${props.currentPage === i ? 'text-indigo-500 bg-indigo-100' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                            >
                                {i}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => props.onPageChange(props.currentPage + 1)}
                            disabled={props.currentPage === props.totalPages}
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};