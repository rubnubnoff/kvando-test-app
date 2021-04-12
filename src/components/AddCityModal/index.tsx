import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import {
  addAdditionalCity,
  resetAddAdditionalCityError,
} from "../../redux/actionCreators/additionalCity";
import { RootState } from "../../redux/store";

import "./styles.css";

interface IProps {
  addCity: (query: string) => void;
  additionalCity: {
    isLoading: boolean;
    hasError: boolean;
  };
  resetAddAdditionalCityError: () => void;
}

const mapStateToProps = ({ additionalCity }: RootState) => ({
  additionalCity,
});

const mapDispatchToProps = (dispatch: any) => ({
  addCity: (query: string) => {
    dispatch(addAdditionalCity(query));
  },
  resetAddAdditionalCityError: () => {
    dispatch(resetAddAdditionalCityError());
  },
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Inputs = {
  city: string;
};

const AddCityModal: React.FC<IProps> = ({
  addCity,
  additionalCity: { isLoading, hasError },
  resetAddAdditionalCityError,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      city: "",
    },
  });

  const onSubmit = (data: Inputs) => {
    addCity(data.city);
    reset();
  };

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    reset();
  }, [reset]);

  const onTryAgainClick = useCallback(() => {
    resetAddAdditionalCityError();
    reset();
  }, [resetAddAdditionalCityError, reset]);

  return (
    <div className="addCityModal">
      <button onClick={openModal}>Add City</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {hasError ? (
          <div>
            Add city error
            <button onClick={onTryAgainClick}>Try Again</button>
          </div>
        ) : (
          <form className="addCityForm" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="addCityForm__input"
              {...register("city", { required: true })}
            />
            {errors.city && <span>This field is required</span>}

            <input type="submit" disabled={isLoading} />
            <button onClick={closeModal}>Close</button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCityModal);
