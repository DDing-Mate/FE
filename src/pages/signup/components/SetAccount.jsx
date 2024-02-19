import EamilConfirm from "./EmailConfirm";
import PasswordConfirm from "./PasswordConfirm";
function SetAccount({ register, getValues, setConfirmEmail }) {
  return (
    <>
      <EamilConfirm
        register={register}
        getValues={getValues}
        setConfirmEmail={setConfirmEmail}
      />
      <PasswordConfirm register={register} />
    </>
  );
}

export default SetAccount;
