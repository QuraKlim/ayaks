export const generatePagination = (currentPage: number, totalPage: number) => {
    const start = Math.max(0, currentPage - 3);
    const end = start + 6;
    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages.filter((page) => page <= totalPage);
};
