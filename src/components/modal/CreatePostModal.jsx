import React from "react";
import { useCreatePostMutation } from "../../services/postSlice";
import { usePostUploadMutation } from "../../services/uploadSlice";
import ApiErrorModal from "./ApiErrorModal";
import PageLoading from "../PageLoading";
import Button from "../form/Button";

const CreatePostModal = () => {
  const [createPost, createPostRes] = useCreatePostMutation();
  const [uploadImage, uploadImageRes] = usePostUploadMutation();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const form = e.target;

      if (form.checkValidity()) {
        const text = form["caption"].value;

        let uploadId = undefined;
        if (form["post"].files.length === 1) {
          const file = form["post"].files[0];
          const uploadBody = new FormData();
          uploadBody.append("upload", file);

          const res = await uploadImage(uploadBody);
          if (res.error) throw new Error("message");
          uploadId = res.data.id;
        }

        await createPost({ text, uploadId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (uploadImageRes.isLoading) return <PageLoading />;
  if (uploadImageRes.isError) return <ApiErrorModal res={uploadImageRes} />;
  if (createPostRes.isError) return <ApiErrorModal res={createPostRes} />;

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Post
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered p-0">
          <div class="modal-content rounded-5">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Create Post
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className=" w-100" onSubmit={onSubmit} noValidate>
                {/* <input
                  type="textArea"
                  rows={4}
                  name="caption"
                  className="form-control form-control-sm rounded-pill p-2 ps-3 shadow-sm mb-3 border-info shadow"
                  placeholder="Image Caption"
                /> */}
                <input type="file" name="post" id="post" required />

                <textarea
                  class="form-control my-4 form-control-sm  p-2 ps-3 shadow-sm mb-3 border-info shadow"
                  placeholder="Image Caption"
                  id="caption"
                  name="caption"
                  required
                ></textarea>

                <Button res={createPostRes}>Create Post</Button>
                {/* )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostModal;
