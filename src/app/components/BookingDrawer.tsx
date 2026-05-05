import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, User, Mail, Phone, Check, Sparkles } from 'lucide-react';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string | null;
}

type BookingStep = 'patient-type' | 'service' | 'date-time' | 'details' | 'success';

const services = [
  { id: 'acne', name: 'Medical Acne Treatment', duration: '45 min', price: '₹28,500' },
  { id: 'anti-aging', name: 'Anti-Aging Protocol', duration: '60 min', price: '₹52,000' },
  { id: 'pigmentation', name: 'Pigmentation Correction', duration: '50 min', price: '₹36,000' },
  { id: 'hydrafacial', name: 'Hydrafacial MD', duration: '60 min', price: '₹20,000' },
  { id: 'laser-hair', name: 'Laser Hair Removal', duration: '30 min', price: '₹12,000' },
  { id: 'microneedling', name: 'Microneedling + PRP', duration: '75 min', price: '₹44,000' },
  { id: 'consultation', name: 'General Consultation', duration: '30 min', price: 'Free' },
];

const availableDates = [
  { date: '2026-05-08', day: 'Fri', dayNum: '8' },
  { date: '2026-05-09', day: 'Sat', dayNum: '9' },
  { date: '2026-05-12', day: 'Mon', dayNum: '12' },
  { date: '2026-05-13', day: 'Tue', dayNum: '13' },
  { date: '2026-05-14', day: 'Wed', dayNum: '14' },
  { date: '2026-05-15', day: 'Thu', dayNum: '15' },
];

const availableTimes = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export function BookingDrawer({ isOpen, onClose, preSelectedService }: BookingDrawerProps) {
  const [step, setStep] = useState<BookingStep>('patient-type');
  const [patientType, setPatientType] = useState<'new' | 'returning' | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (preSelectedService && isOpen) {
      const service = services.find(s => s.name === preSelectedService);
      if (service) {
        setSelectedService(service.id);
        setStep('date-time');
      }
    }
  }, [preSelectedService, isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('patient-type');
      setPatientType(null);
      setSelectedService(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: '', email: '', phone: '' });
    }, 300);
  };

  const handleNext = () => {
    if (step === 'patient-type' && patientType) {
      setStep('service');
    } else if (step === 'service' && selectedService) {
      setStep('date-time');
    } else if (step === 'date-time' && selectedDate && selectedTime) {
      setStep('details');
    } else if (step === 'details' && formData.name && formData.email && formData.phone) {
      setStep('success');
    }
  };

  const handleBack = () => {
    if (step === 'service') setStep('patient-type');
    else if (step === 'date-time') setStep('service');
    else if (step === 'details') setStep('date-time');
  };

  const canProceed = () => {
    if (step === 'patient-type') return patientType !== null;
    if (step === 'service') return selectedService !== null;
    if (step === 'date-time') return selectedDate !== null && selectedTime !== null;
    if (step === 'details') return formData.name && formData.email && formData.phone;
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[480px] z-50"
          >
            {/* Glassmorphism effect */}
            <div className="h-full bg-background/95 backdrop-blur-2xl border-l border-border shadow-2xl flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {step !== 'patient-type' && step !== 'success' && (
                    <button
                      onClick={handleBack}
                      className="p-2 hover:bg-secondary rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h3 className="font-serif text-2xl">Book Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      {step === 'patient-type' && 'Let\'s get started'}
                      {step === 'service' && 'Choose your treatment'}
                      {step === 'date-time' && 'Select date & time'}
                      {step === 'details' && 'Your information'}
                      {step === 'success' && 'All set!'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress indicator */}
              {step !== 'success' && (
                <div className="px-6 py-4 bg-secondary/30">
                  <div className="flex items-center gap-2">
                    <div className={`h-1 flex-1 rounded-full ${step === 'patient-type' ? 'bg-primary' : 'bg-primary/30'}`} />
                    <div className={`h-1 flex-1 rounded-full ${step === 'service' || step === 'date-time' || step === 'details' ? 'bg-primary' : 'bg-primary/30'}`} />
                    <div className={`h-1 flex-1 rounded-full ${step === 'date-time' || step === 'details' ? 'bg-primary' : 'bg-primary/30'}`} />
                    <div className={`h-1 flex-1 rounded-full ${step === 'details' ? 'bg-primary' : 'bg-primary/30'}`} />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {step === 'patient-type' && (
                    <motion.div
                      key="patient-type"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={() => setPatientType('new')}
                        className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                          patientType === 'new'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">New Patient</h4>
                          {patientType === 'new' && <Check className="w-5 h-5 text-primary" />}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          First time visiting our clinic
                        </p>
                      </button>

                      <button
                        onClick={() => setPatientType('returning')}
                        className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                          patientType === 'returning'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Returning Patient</h4>
                          {patientType === 'returning' && <Check className="w-5 h-5 text-primary" />}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          I've visited Lumière before
                        </p>
                      </button>
                    </motion.div>
                  )}

                  {step === 'service' && (
                    <motion.div
                      key="service"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-3"
                    >
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                            selectedService === service.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium">{service.name}</h4>
                            {selectedService === service.id && (
                              <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {service.duration}
                            </span>
                            <span className="font-medium text-primary">{service.price}</span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {step === 'date-time' && (
                    <motion.div
                      key="date-time"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="font-medium mb-4 flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5" />
                          Select Date
                        </h4>
                        <div className="grid grid-cols-3 gap-3">
                          {availableDates.map((dateObj) => (
                            <button
                              key={dateObj.date}
                              onClick={() => setSelectedDate(dateObj.date)}
                              className={`p-4 rounded-xl border-2 transition-all ${
                                selectedDate === dateObj.date
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <div className="text-sm text-muted-foreground mb-1">{dateObj.day}</div>
                              <div className="text-xl font-medium">{dateObj.dayNum}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Select Time
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            {availableTimes.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 rounded-xl border-2 transition-all text-sm ${
                                  selectedTime === time
                                    ? 'border-primary bg-primary/5'
                                    : 'border-border hover:border-primary/50'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {step === 'details' && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none bg-input-background transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none bg-input-background transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none bg-input-background transition-colors"
                        />
                      </div>

                      <div className="mt-6 p-4 bg-secondary/30 rounded-xl">
                        <h5 className="text-sm font-medium mb-3">Booking Summary</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Treatment</span>
                            <span className="font-medium">
                              {services.find(s => s.id === selectedService)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium">
                              {availableDates.find(d => d.date === selectedDate)?.day} {availableDates.find(d => d.date === selectedDate)?.dayNum}, 2026
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Time</span>
                            <span className="font-medium">{selectedTime}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <Check className="w-10 h-10 text-primary" />
                      </motion.div>

                      <h3 className="font-serif text-3xl mb-4">You're All Set!</h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        Your consultation has been confirmed. We've sent a confirmation email to{' '}
                        <span className="text-foreground font-medium">{formData.email}</span>
                      </p>

                      <div className="bg-secondary/30 rounded-xl p-6 mb-8 text-left">
                        <h4 className="font-medium mb-4">Appointment Details</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Treatment</span>
                            <span className="font-medium">
                              {services.find(s => s.id === selectedService)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date & Time</span>
                            <span className="font-medium">
                              {availableDates.find(d => d.date === selectedDate)?.day} {availableDates.find(d => d.date === selectedDate)?.dayNum}, {selectedTime}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location</span>
                            <span className="font-medium">Lumière Main</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all">
                          Add to Calendar
                        </button>
                        <button
                          onClick={handleClose}
                          className="w-full py-3 border-2 border-border rounded-full hover:bg-secondary transition-all"
                        >
                          Done
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {step !== 'success' && (
                <div className="p-6 border-t border-border">
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                  >
                    {step === 'details' ? 'Confirm Booking' : 'Continue'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
