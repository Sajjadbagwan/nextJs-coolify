import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import AccountLayout from "./AccountLayout";
import { toast } from "@/hooks/use-toast";

const steps = ["Company", "Contact", "Size", "References", "Declaration"] as const;
type StepIdx = 0 | 1 | 2 | 3 | 4;

const inputCls =
  "w-full h-12 px-3 rounded border border-border bg-card text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]";
const selectCls = inputCls + " appearance-none bg-card";
const labelCls = "block text-[12px] font-medium text-[hsl(var(--brand-dark))] mb-1.5";
const sectionTitleCls =
  "font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))] mb-3";
const required = <span className="text-[hsl(var(--sale-red))] ml-0.5">*</span>;

const Stepper = ({ active }: { active: StepIdx }) => (
  <div className="bg-[hsl(var(--brand-dark))] rounded-lg px-2 py-4 mb-5">
    <div className="flex items-start justify-between gap-1">
      {steps.map((s, i) => {
        const done = i < active;
        const current = i === active;
        return (
          <div key={s} className="flex flex-col items-center flex-1 min-w-0 px-0.5">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center border-2 text-[12px] font-bold shrink-0 ${
                done || current
                  ? "bg-[hsl(var(--brand-light-blue))] border-[hsl(var(--brand-light-blue))] text-[hsl(var(--brand-dark))]"
                  : "bg-transparent border-white/40 text-white/60"
              }`}
            >
              {done ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : i + 1}
            </div>
            <span
              className={`mt-2 text-[12px] font-medium text-center leading-tight whitespace-nowrap ${
                current ? "text-white" : "text-white/60"
              }`}
            >
              {s}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const NavBtns = ({
  onBack,
  onNext,
  nextLabel = "Next",
  showBack = true,
}: {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  showBack?: boolean;
}) => (
  <div className={`grid ${showBack ? "grid-cols-2" : "grid-cols-1"} gap-2 pt-2`}>
    {showBack && (
      <button
        type="button"
        onClick={onBack}
        className="h-12 border border-border bg-card text-[hsl(var(--brand-dark))] font-heading text-[14px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-bg))]"
      >
        Back
      </button>
    )}
    <button
      type="button"
      onClick={onNext}
      className="h-12 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-mid))]"
    >
      {nextLabel}
    </button>
  </div>
);

const TradeApplyCredit = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepIdx>(0);
  const [tradingSame, setTradingSame] = useState(true);
  const [groupMember, setGroupMember] = useState<"yes" | "no">("no");
  const [accountsSame, setAccountsSame] = useState(true);
  const [salesSame, setSalesSame] = useState(true);
  const [agreed, setAgreed] = useState(false);

  const next = () => setStep((s) => Math.min(4, s + 1) as StepIdx);
  const back = () => setStep((s) => Math.max(0, s - 1) as StepIdx);

  const submit = () => {
    if (!agreed) {
      toast({ title: "Please agree to the terms", variant: "destructive" });
      return;
    }
    toast({
      title: "Application submitted",
      description: "Thanks for submitting your request for a credit trade account. We will get back to you.",
    });
    setTimeout(() => navigate("/trade"), 1200);
  };

  return (
    <AccountLayout title="Apply for a Credit Account" backTo="/trade" backLabel="Account">
      <div className="px-4 pt-4 pb-8">
        <p className="text-[14px] text-muted-foreground mb-4">
          Upgrade to a credit account by completing the form below about your company.
        </p>

        <Stepper active={step} />

        {/* STEP 0: COMPANY DETAILS */}
        {step === 0 && (
          <div className="space-y-6">
            <section>
              <h2 className={sectionTitleCls}>About your business</h2>
              <div className="space-y-3">
                <div>
                  <label className={labelCls}>Company Name{required}</label>
                  <input className={inputCls} defaultValue="CDA Test 240426" />
                </div>
                <div>
                  <label className={labelCls}>Type of Business{required}</label>
                  <select className={selectCls} defaultValue="partnership">
                    <option value="">Select...</option>
                    <option value="sole-trader">Sole Trader</option>
                    <option value="partnership">Partnership</option>
                    <option value="ltd">Limited Company</option>
                    <option value="llp">LLP</option>
                    <option value="plc">PLC</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>VAT Registered{required}</label>
                  <select className={selectCls} defaultValue="no">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>
            </section>

            <section>
              <h2 className={sectionTitleCls}>Registered Address</h2>
              <div className="space-y-3">
                <div>
                  <label className={labelCls}>Country{required}</label>
                  <select className={selectCls} defaultValue="uk">
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Address Line 1{required}</label>
                  <input className={inputCls} defaultValue="CDA, 1st Floor" />
                </div>
                <div>
                  <label className={labelCls}>Address Line 2</label>
                  <input className={inputCls} defaultValue="42 Wilbury Way" />
                </div>
                <div>
                  <label className={labelCls}>Address Line 3</label>
                  <input className={inputCls} placeholder="Address Line 3" />
                </div>
                <div>
                  <label className={labelCls}>County</label>
                  <input className={inputCls} placeholder="County" />
                </div>
                <div>
                  <label className={labelCls}>Village / City / Town{required}</label>
                  <input className={inputCls} defaultValue="HITCHIN" />
                </div>
                <div>
                  <label className={labelCls}>Post Code{required}</label>
                  <input className={inputCls} defaultValue="SG4 0AP" />
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className={sectionTitleCls + " mb-0"}>Trading Address</h2>
                <label className="flex items-center gap-2 text-[12px] text-foreground">
                  <input
                    type="checkbox"
                    checked={tradingSame}
                    onChange={(e) => setTradingSame(e.target.checked)}
                    className="w-4 h-4 accent-[hsl(var(--brand-mid))]"
                  />
                  Same as registered
                </label>
              </div>
              {!tradingSame && (
                <div className="space-y-3">
                  <div>
                    <label className={labelCls}>Address Line 1{required}</label>
                    <input className={inputCls} placeholder="Address" />
                  </div>
                  <div>
                    <label className={labelCls}>Village / City / Town{required}</label>
                    <input className={inputCls} placeholder="Village / City / Town" />
                  </div>
                  <div>
                    <label className={labelCls}>Post Code{required}</label>
                    <input className={inputCls} placeholder="Post Code" />
                  </div>
                </div>
              )}
            </section>

            <section>
              <h2 className={sectionTitleCls}>Group Structure</h2>
              <div className="space-y-3">
                <div>
                  <label className={labelCls}>Is your company a member of a larger group?</label>
                  <select
                    className={selectCls}
                    value={groupMember}
                    onChange={(e) => setGroupMember(e.target.value as "yes" | "no")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                {groupMember === "yes" && (
                  <>
                    <div>
                      <label className={labelCls}>Parent Company Name{required}</label>
                      <input className={inputCls} placeholder="Company Name" />
                    </div>
                    <div>
                      <label className={labelCls}>Address Line 1{required}</label>
                      <input className={inputCls} placeholder="Address" />
                    </div>
                    <div>
                      <label className={labelCls}>Post Code{required}</label>
                      <input className={inputCls} placeholder="Post Code" />
                    </div>
                  </>
                )}
              </div>
            </section>

            <NavBtns onNext={next} showBack={false} />
          </div>
        )}

        {/* STEP 1: CONTACT INFORMATION */}
        {step === 1 && (
          <div className="space-y-6">
            <section>
              <h2 className={sectionTitleCls}>Company Contact</h2>
              <div className="space-y-3">
                <div>
                  <label className={labelCls}>Company Name{required}</label>
                  <input className={inputCls} defaultValue="CDA Test 240426" />
                </div>
                <div>
                  <label className={labelCls}>Email{required}</label>
                  <input type="email" className={inputCls} defaultValue="t2@cda.group" />
                </div>
                <div>
                  <label className={labelCls}>Phone Number{required}</label>
                  <input type="tel" className={inputCls} defaultValue="07881111111" />
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className={sectionTitleCls + " mb-0"}>Accounts Contact</h2>
                <label className="flex items-center gap-2 text-[12px] text-foreground">
                  <input
                    type="checkbox"
                    checked={accountsSame}
                    onChange={(e) => setAccountsSame(e.target.checked)}
                    className="w-4 h-4 accent-[hsl(var(--brand-mid))]"
                  />
                  Same as company
                </label>
              </div>
              {!accountsSame && (
                <div className="space-y-3">
                  <div>
                    <label className={labelCls}>Email{required}</label>
                    <input type="email" className={inputCls} placeholder="accounts@company.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number{required}</label>
                    <input type="tel" className={inputCls} placeholder="Phone Number" />
                  </div>
                </div>
              )}
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className={sectionTitleCls + " mb-0"}>Sales Contact</h2>
                <label className="flex items-center gap-2 text-[12px] text-foreground">
                  <input
                    type="checkbox"
                    checked={salesSame}
                    onChange={(e) => setSalesSame(e.target.checked)}
                    className="w-4 h-4 accent-[hsl(var(--brand-mid))]"
                  />
                  Same as company
                </label>
              </div>
              {!salesSame && (
                <div className="space-y-3">
                  <div>
                    <label className={labelCls}>Email{required}</label>
                    <input type="email" className={inputCls} placeholder="sales@company.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number{required}</label>
                    <input type="tel" className={inputCls} placeholder="Phone Number" />
                  </div>
                </div>
              )}
            </section>

            <NavBtns onBack={back} onNext={next} />
          </div>
        )}

        {/* STEP 2: SIZE */}
        {step === 2 && (
          <div className="space-y-6">
            <section>
              <h2 className={sectionTitleCls}>Company History & Sales Information</h2>
              <div className="space-y-3">
                <div>
                  <label className={labelCls}>No. of Employees{required}</label>
                  <input type="number" className={inputCls} placeholder="e.g. 25" />
                </div>
                <div>
                  <label className={labelCls}>Preferred Credit Limit (£){required}</label>
                  <input type="number" className={inputCls} defaultValue={0} />
                </div>
                <div>
                  <label className={labelCls}>Annual Turnover (£){required}</label>
                  <input type="number" className={inputCls} placeholder="Annual Turnover" />
                </div>
                <div>
                  <label className={labelCls}>Year Established{required}</label>
                  <input type="number" className={inputCls} placeholder="e.g. 2010" />
                </div>
                <div>
                  <label className={labelCls}>Nature of Business{required}</label>
                  <textarea
                    className={inputCls + " h-24 py-2 resize-none"}
                    placeholder="Describe your business..."
                  />
                </div>
              </div>
            </section>

            <NavBtns onBack={back} onNext={next} />
          </div>
        )}

        {/* STEP 3: REFERENCES */}
        {step === 3 && (
          <div className="space-y-6">
            {[1, 2].map((n) => (
              <section key={n}>
                <h2 className={sectionTitleCls}>Reference {n}</h2>
                <div className="space-y-3">
                  <div>
                    <label className={labelCls}>Company Name{required}</label>
                    <input className={inputCls} placeholder="Company Name" />
                  </div>
                  <div>
                    <label className={labelCls}>Contact Name{required}</label>
                    <input className={inputCls} placeholder="Contact Name" />
                  </div>
                  <div>
                    <label className={labelCls}>Contact Email{required}</label>
                    <input type="email" className={inputCls} placeholder="Contact Email" />
                  </div>
                  <div>
                    <label className={labelCls}>Contact Phone{required}</label>
                    <input type="tel" className={inputCls} placeholder="Contact Phone" />
                  </div>
                </div>
              </section>
            ))}

            <NavBtns onBack={back} onNext={next} />
          </div>
        )}

        {/* STEP 4: DECLARATION */}
        {step === 4 && (
          <div className="space-y-6">
            <section>
              <h2 className={sectionTitleCls}>Declaration</h2>
              <div className="space-y-3">
                <div>
                  <label className={labelCls}>Sign{required}</label>
                  <input className={inputCls} placeholder="Type your full signature" />
                </div>
                <div>
                  <label className={labelCls}>Name{required}</label>
                  <input className={inputCls} placeholder="Full name" />
                </div>
                <div>
                  <label className={labelCls}>Position{required}</label>
                  <input className={inputCls} placeholder="e.g. Director" />
                </div>
              </div>
            </section>

            <section>
              <h2 className={sectionTitleCls}>Terms</h2>
              <div className="bg-[hsl(var(--brand-bg))] rounded-lg p-4 max-h-64 overflow-y-auto text-[12px] text-muted-foreground leading-relaxed space-y-2">
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">THESE CONDITIONS</strong> apply
                  to all contracts for the sales of goods entered into by Isaac Lord Ltd. (Herein
                  after termed "The Company") whereby any order placed with The Company will be
                  accepted on these conditions, and on no other.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">CARRIAGE PAID TERMS.</strong>{" "}
                  Orders consigned to addresses within our van delivery area will be Carriage Paid.
                  Consignments dispatched other than that by our own transport will be subject to
                  Carriage/Postage & Packing charges unless order value qualifies for Carriage Paid.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">PAYMENT OF ACCOUNTS.</strong>{" "}
                  Credit accounts are due for payment by 15th of the next month following the date
                  of the invoice. Where possible payment of account by BACS is preferred.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">OVERDUE ACCOUNTS.</strong>{" "}
                  Please note accounts will be placed on stop should they become overdue or if the
                  credit limit is exceeded.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">TITLE</strong> of goods does not
                  pass to the buyer until: Payment is received by The Company for such goods, and
                  until that time the Buyer holds such goods as bare trustee for The Company.
                </p>
              </div>
            </section>

            <label className="flex items-start gap-2.5 text-[14px] text-foreground">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-[hsl(var(--brand-mid))]"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-[hsl(var(--brand-mid))] font-medium underline">
                  terms and conditions
                </a>
                {required}
              </span>
            </label>

            <NavBtns onBack={back} onNext={submit} nextLabel="Submit Application" />
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default TradeApplyCredit;
