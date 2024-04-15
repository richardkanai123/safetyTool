import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

const PeopleInvolvedForm = ({
  reg,
  errors,
}: {
  reg: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}) => {
  return (
    <div className="w-full px-4 py-2 mx-auto md:max-w-[700px] text-lg border">
      <p className="text-xl font-bold">People Involved</p>

      <div className="w-full flex items-center gap-3 mt-4 ">
        <label htmlFor="staff_involved">Staff Involved</label>
        <input
          {...reg('people_involved.staff_involved')}
          id="staff_involved"
          type="checkbox"
          className="form-check rounded-full  ring-main border-main  inline-block"
        />
        {errors.staff_involved && (
          <p className="text-red-400 my-4">
            {errors.staff_involved.message as string}
          </p>
        )}
      </div>
      <label htmlFor="injuries" className="block">
        Injuries Involved
      </label>
      <input
        type="number"
        {...reg('people_involved.injuries', {
          valueAsNumber: true,
        })}
        min={0}
        id="injuries"
        className="w-full form-input rounded-full inline-block"
      />
      <label htmlFor="fatalities" className="block">
        Fatalities
      </label>
      <input
        type="number"
        {...reg('people_involved.fatalities', {
          valueAsNumber: true,
        })}
        id="fatalities"
        min={0}
        className="w-full form-input rounded-full inline-block"
      />

      {(errors?.injuries || errors?.fatalities) && (
        <>
          <p className="text-red-400 my-4">
            {errors.injuries?.message as string}
          </p>
          <p className="text-red-400 my-4">
            {errors.fatalities?.message as string}
          </p>
        </>
      )}

      <div className="flex flex-col my-4 p-4 ">
        <label htmlFor="severity">Severity:</label>
        <input
          className="w-full form-input rounded-full inline-block"
          id="severity"
          type="number"
          {...reg('severity', {
            valueAsNumber: true,
          })}
          min={1}
          max={5}
        />
      </div>
    </div>
  );
};

export default PeopleInvolvedForm;
