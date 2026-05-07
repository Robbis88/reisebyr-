"use client";

import { useActionState } from "react";
import { lagreHenvendelse, type KontaktState } from "./actions";

const initialState: KontaktState = {};

const inputClass =
  "mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-black px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20";

export function KontaktSkjema({
  defaultDestinasjon,
}: {
  defaultDestinasjon?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    lagreHenvendelse,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Skole *" name="skole" required />
        <Field label="Kontaktperson *" name="kontaktperson" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="E-post *" name="epost" type="email" required />
        <Field label="Telefon" name="telefon" type="tel" />
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Klassetrinn" name="klassetrinn" placeholder="f.eks. VG2" />
        <Field
          label="Antall elever"
          name="antall_elever"
          type="number"
          min={1}
          placeholder="f.eks. 28"
        />
        <Field
          label="Destinasjon"
          name="destinasjon"
          defaultValue={defaultDestinasjon}
          placeholder="f.eks. Berlin"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Melding *</label>
        <textarea
          name="melding"
          required
          rows={6}
          className={inputClass}
          placeholder="Fortell kort om ønsket tidspunkt, faglig fokus og eventuelle spesielle behov."
        />
      </div>

      {state.error && (
        <div className="rounded-md border border-red-300 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-sm text-red-800 dark:text-red-300">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center rounded-md bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white px-6 py-3 font-medium"
      >
        {isPending ? "Sender …" : "Send henvendelse"}
      </button>
      <p className="text-xs text-zinc-500">* påkrevde felter</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  min?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        min={min}
        className={inputClass}
      />
    </div>
  );
}
