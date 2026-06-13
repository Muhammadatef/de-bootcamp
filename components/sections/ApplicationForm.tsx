"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, useInView, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { inViewOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Checkbox } from "@/components/ui/Checkbox";
import { FieldLabel, FieldError } from "@/components/ui/Field";
import { FileUpload } from "@/components/ui/FileUpload";
import { formValues, zipOptions } from "@/lib/i18n";
import {
  applicationSchema,
  type ApplicationFormData,
} from "@/lib/validations/application";

const MOTIVATION_MAX = 1000;

export function ApplicationForm() {
  const { t } = useLanguage();
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOnce);

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const shakeControls = useAnimationControls();

  const shake = () => {
    shakeControls.start({ x: [-8, 8, -8, 8, 0], transition: { duration: 0.4 } });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onSubmit",
  });

  const motivationValue = watch("motivation") || "";

  const onValid = async (data: ApplicationFormData) => {
    if (!cvFile) {
      setCvError(t.form.upload.hint);
      shake();
      return;
    }
    setSubmitState("submitting");

    try {
      const fd = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        fd.append(key, String(value));
      });
      fd.append("cv", cvFile);

      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Request failed");

      setSubmitState("success");
      setTimeout(() => router.push("/success"), 2000);
    } catch {
      setSubmitState("error");
    }
  };

  const onInvalid = () => shake();

  return (
    <section id="apply" className="bg-bg-primary py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-[680px] px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          <SectionHeader
            eyebrow={t.form.eyebrow}
            headline={t.form.headline}
            subheadline={t.form.subheadline}
          />
        </motion.div>

        <div className="mt-10 rounded-2xl border border-border-subtle bg-bg-surface p-6 md:p-8">
          <AnimatePresence mode="wait">
            {submitState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-green" />
                <h3 className="mt-5 font-heading text-h3 text-text-primary">
                  {t.form.successTitle}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                  {t.form.successBody}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onValid, onInvalid)}
                noValidate
                animate={shakeControls}
                className="flex flex-col gap-7"
              >
                {/* Personal Information */}
                <FormSection title={t.form.sectionPersonal}>
                  <div>
                    <FieldLabel htmlFor="fullName">{t.form.fields.fullName.label}</FieldLabel>
                    <Input
                      id="fullName"
                      placeholder={t.form.fields.fullName.placeholder}
                      {...register("fullName")}
                    />
                    <FieldError message={errors.fullName?.message} />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="email">{t.form.fields.email.label}</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.form.fields.email.placeholder}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="phone">{t.form.fields.phone.label}</FieldLabel>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t.form.fields.phone.placeholder}
                        {...register("phone")}
                      />
                      <FieldError message={errors.phone?.message} />
                    </div>
                  </div>

                  <div>
                    <FieldLabel htmlFor="nationality">
                      {t.form.fields.nationality.label}
                    </FieldLabel>
                    <Select
                      id="nationality"
                      defaultValue=""
                      placeholder={t.form.selectPlaceholder}
                      options={zipOptions(formValues.nationality, t.form.nationalityOptions)}
                      {...register("nationality")}
                    />
                    <FieldError message={errors.nationality?.message} />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="city">{t.form.fields.city.label}</FieldLabel>
                      <Select
                        id="city"
                        defaultValue=""
                        placeholder={t.form.selectPlaceholder}
                        options={zipOptions(formValues.city, t.form.cityOptions)}
                        {...register("city")}
                      />
                      <FieldError message={errors.city?.message} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="status">{t.form.fields.status.label}</FieldLabel>
                      <Select
                        id="status"
                        defaultValue=""
                        placeholder={t.form.selectPlaceholder}
                        options={zipOptions(formValues.status, t.form.statusOptions)}
                        {...register("status")}
                      />
                      <FieldError message={errors.status?.message} />
                    </div>
                  </div>
                </FormSection>

                {/* Technical Background */}
                <FormSection title={t.form.sectionTechnical}>
                  <div>
                    <FieldLabel>{t.form.fields.pythonLevel.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.python, t.form.pythonOptions)}
                      {...register("pythonLevel")}
                    />
                    <FieldError message={errors.pythonLevel?.message} />
                  </div>
                  <div>
                    <FieldLabel>{t.form.fields.sqlLevel.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.sql, t.form.sqlOptions)}
                      {...register("sqlLevel")}
                    />
                    <FieldError message={errors.sqlLevel?.message} />
                  </div>
                  <div>
                    <FieldLabel>{t.form.fields.linuxLevel.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.linux, t.form.linuxOptions)}
                      {...register("linuxLevel")}
                    />
                    <FieldError message={errors.linuxLevel?.message} />
                  </div>
                </FormSection>

                {/* Motivation */}
                <FormSection title={t.form.sectionMotivation}>
                  <div>
                    <FieldLabel htmlFor="motivation">{t.form.fields.motivation.label}</FieldLabel>
                    <Textarea
                      id="motivation"
                      rows={6}
                      maxLength={MOTIVATION_MAX}
                      placeholder={t.form.fields.motivation.placeholder}
                      {...register("motivation")}
                    />
                    <div className="mt-1.5 flex items-center justify-between">
                      <FieldError message={errors.motivation?.message} />
                      <span className="ms-auto font-mono text-xs text-text-muted">
                        {t.form.charCounter(motivationValue.length, MOTIVATION_MAX)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <FieldLabel htmlFor="goal">{t.form.fields.goal.label}</FieldLabel>
                    <Select
                      id="goal"
                      defaultValue=""
                      placeholder={t.form.selectPlaceholder}
                      options={zipOptions(formValues.goal, t.form.goalOptions)}
                      {...register("goal")}
                    />
                    <FieldError message={errors.goal?.message} />
                  </div>
                </FormSection>

                {/* Commitment & Availability */}
                <FormSection title={t.form.sectionCommitment}>
                  <div>
                    <FieldLabel>{t.form.fields.commit4Months.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.yesNo, t.form.yesNoOptions)}
                      {...register("commit4Months")}
                    />
                    <FieldError message={errors.commit4Months?.message} />
                  </div>
                  <div>
                    <FieldLabel>{t.form.fields.available5Hours.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.yesNo, t.form.yesNoOptions)}
                      {...register("available5Hours")}
                    />
                    <FieldError message={errors.available5Hours?.message} />
                  </div>
                  <div>
                    <FieldLabel>{t.form.fields.timeEffort.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.yesNo, t.form.yesNoOptions)}
                      {...register("timeEffort")}
                    />
                    <FieldError message={errors.timeEffort?.message} />
                  </div>
                  <div>
                    <FieldLabel>{t.form.fields.englishComfortable.label}</FieldLabel>
                    <RadioGroup
                      options={zipOptions(formValues.yesNo, t.form.yesNoOptions)}
                      {...register("englishComfortable")}
                    />
                    <FieldError message={errors.englishComfortable?.message} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="aboutYou">{t.form.fields.aboutYou.label}</FieldLabel>
                    <Textarea
                      id="aboutYou"
                      rows={4}
                      placeholder={t.form.fields.aboutYou.placeholder}
                      {...register("aboutYou")}
                    />
                    <FieldError message={errors.aboutYou?.message} />
                  </div>
                </FormSection>

                {/* Documents */}
                <FormSection title={t.form.sectionDocuments}>
                  <div>
                    <FieldLabel>{t.form.upload.title}</FieldLabel>
                    <FileUpload
                      file={cvFile}
                      onFileChange={(f) => {
                        setCvFile(f);
                        setCvError(null);
                      }}
                      prompt={t.form.upload.prompt}
                      hint={t.form.upload.hint}
                      changeLabel={t.form.upload.change}
                      onRejected={(msg) => setCvError(msg)}
                    />
                    <FieldError message={cvError ?? undefined} />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="linkedin" optional={t.form.optional}>
                        {t.form.fields.linkedin.label}
                      </FieldLabel>
                      <Input
                        id="linkedin"
                        type="url"
                        placeholder={t.form.fields.linkedin.placeholder}
                        {...register("linkedin")}
                      />
                      <FieldError message={errors.linkedin?.message} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="github" optional={t.form.optional}>
                        {t.form.fields.github.label}
                      </FieldLabel>
                      <Input
                        id="github"
                        type="url"
                        placeholder={t.form.fields.github.placeholder}
                        {...register("github")}
                      />
                      <FieldError message={errors.github?.message} />
                    </div>
                  </div>
                </FormSection>

                {/* Commitment */}
                <div className="rounded-xl border border-border-subtle bg-bg-elevated p-4">
                  <Checkbox
                    id="commitment"
                    label={t.form.fields.commitment.label}
                    {...register("commitment")}
                  />
                  <FieldError message={errors.commitment?.message} />
                </div>

                {submitState === "error" && (
                  <p className="text-sm text-red">{t.form.errorBody}</p>
                )}

                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan py-4 text-base font-bold text-bg-primary transition-opacity hover:opacity-90 disabled:opacity-70"
                >
                  {submitState === "submitting" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t.form.submitting}
                    </>
                  ) : (
                    t.form.submit
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="eyebrow mb-1">{title}</legend>
      {children}
    </fieldset>
  );
}
