console.log("Events frontend javascript file");

$(function () {
    // New event bosganda ==> event Container pastga tushadi
    $("#process-btn").on("click", () => {
        $(".event-container").slideToggle(500);
        $("#process-btn").css("display", "");
    });
     // Cancel bosilganda ==> event Container yuqoladi
     $("#cancel-btn").on("click", () => {
        $(".event-container").slideToggle(500);
        $("#process-btn").css("display", "flex");
    });

    $(".new-event-status").on("change", async function (e) {
        const id = e.target.id;
        const eventStatus = $(`#${id}.new-event-status`).val();
        console.log("id:", id);
        console.log("eventStatus",eventStatus);

        try {
            const response = await axios.post(`/admin/event/${id}`, {eventStatus: eventStatus});
            console.log("response:", response);
            const result = response.data;

            if(result.data) {
                console.log("Event updated!");
                $(".new-event-status").blur();
            } else alert("Event update failed");
        } catch (err) {
            console.log(err);
            alert("Event updated failed!")
        }
    })
});

function validateForm() {
    const eventName = $(".event-name").val();
    const eventAuthor = $(".event-author").val();
    const eventLocation = $(".event-locations").val();
    const eventCollection = $(".event-collection").val();
    const eventDesc = $(".event-desc").val();s
    const eventStatus = $(".event-status").val();

    if (
        eventName === "" ||
        eventAuthor === "" ||
        eventLocation === "" ||
        eventDesc === "" ||
        eventStatus === "" ||
        eventCollection === "" 
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