console.log("Products frontend javascript file");


$(function () {
    // ProductType DRINK bo'lsa ==> Drink Volume ga o'zgar
    // ProductType DISH bo'lsa ==> Dish Volume ga o'zgar
    $(".product-collection").on("change", () => {
        const selected = $(".product-collection").val();
        if(selectedValue === "DRINK") {
            $("#product-volume").show();
            $("#product-collection").hide();
        
        } else {
            $("#product-collection").show();
            $("#product-volume").hide();
        }
    });
    // New Product bosganda ==> Product Container pastga tushad
    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    });
    // Cancel bosilganda ==> Product Container yuqoladi
    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "flex");
    });

    $(".new-product-status").on("change", async function (e) {
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();
        console.log("id:", id);
        console.log("productStatus",productStatus);

        try {
            const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus});
            console.log("response:", response);
            const result = response.data;

            if(result.data) {
                console.log("Product updated!");
                $(".new-product-status").blur();
            } else alert("Product update failed");
        } catch (err) {
            console.log(err);
            alert("Product updated failed!")
        }
    })
    
});


function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productDesc = $(".product-desc").val();
    const productStatus = $(".product-status").val();

    if (
        productName === "" ||
        productPrice === "" ||
        productCount === "" ||
        productCollection === "" ||
        productDesc === "" ||
        productStatus === ""
    ) {
        alert("Please insert all details!");
        return false;
    } else return true;
}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input:", input);
    // console.log("imgClassName", imgClassName);

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType= file['type'];
    const validImageType = ["image/jpg", "image/png", "image/jpeg"];

    if(!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg, and png!");
    } else {
        if(file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}