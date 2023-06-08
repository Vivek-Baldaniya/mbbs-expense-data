const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running...");
});

// Endpoint to retrieve the data
app.get("/cost/data", (req, res) => {
  const data = {
    India: {
      Private: {
        Karnataka: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Maharashtra: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Uttar_Pradesh: {
          Fees: 1100100,
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Tamil_Nadu: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
      Government: {
        Karnataka: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Maharashtra: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Uttar_Pradesh: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Tamil_Nadu: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
    },

    Abroad: {
      Private: {
        Kyrgyzstan: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Nepal: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Philippines: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Georgia: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Kazakhstan: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Russia: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
      Government: {
        Kyrgyzstan: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Nepal: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Philippines: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Georgia: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Kazakhstan: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Russia: {
          Fees: 1100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 20000,
            Rent: 40000,
            Taxi: 30000,
          },
          Activities: {
            Gym: 12000,
            Sports: 10000,
            Movies: 2000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
    },
  };

  res.json(data);
});

const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
