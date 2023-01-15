document.addEventListener("DOMContentLoaded", () => {
	const treeBody = document.querySelector(".tree-body");
	if (treeBody) {
		treeBody.addEventListener("click", (e) => {
			if (e.target.classList.contains("js-folder-trigger")) {
				const parent = e.target.parentNode;
				parent.classList.toggle("_open");

				if (!parent.classList.contains("_open")) {
					// если мы закрываем папку, то закрываем и все дочерние
					const childFolders = parent.querySelectorAll(".tree-folder");

					if (childFolders.length) {
						childFolders.forEach((folder) => {
							folder.classList.remove("_open");
						});
					}
				}
			}
		});
	}
});
