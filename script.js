document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete");
    const editButtons = document.querySelectorAll(".edit");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const row = this.parentElement.parentElement;
            row.remove();
            alert("Product deleted successfully!");
        });
    });

    editButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Edit feature will be implemented soon!");
        });
    });
});
